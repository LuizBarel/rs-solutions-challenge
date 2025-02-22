import { HttpService } from '@nestjs/axios';
import {
    forwardRef,
    Inject,
    Injectable,
    InternalServerErrorException,
    Logger,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CredentialsNotFoundException } from 'src/exceptions/credentialsnotfound.exception';
import { AxiosResponse } from 'axios';
import { ExternalAPIException } from 'src/exceptions/externalapiexception';
import { getFormattedDates } from './helpers/dateForSearch';
import { OrdersService } from 'src/orders/orders.service';
import { CashiersService } from 'src/cashiers/cashiers.service';

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */

@Injectable()
export class SeruApiService {
    private readonly clientId: string = process.env.CLIENT_ID as string;
    private readonly clientSecret: string = process.env.CLIENT_SECRET as string;
    private readonly apiURL: string =
        'https://integration.plataformaseru.com.br/v1';
    protected token: string | null = null;

    private readonly logger: Logger = new Logger(SeruApiService.name);

    constructor(
        private readonly httpService: HttpService,
        private orderService: OrdersService,
        @Inject(forwardRef(() => CashiersService))
        private cashierService: CashiersService,
    ) {}

    // ! para garantir retorno de dados (testando novas features) = tempo de intervalo de 24 horas

    /**
     * Gera uma credencial codificada em base64 para buscar o token
     * @returns string credenciais codificadas
     */
    createClientCredentials() {
        if (this.clientId == null || this.clientSecret == null) {
            throw new CredentialsNotFoundException();
        }

        const base: string = `${this.clientId}:${this.clientSecret}`;
        return Buffer.from(base, 'utf-8').toString('base64');
    }

    /**
     * Função genérica pra realizar a request e retornar seus dados
     * @return AxiosResponse<any> response.data
     * @throws ExternalAPIException
     * @throws InternalServerErrorException
     */
    async searchInAPI(type: any, params: object): Promise<Array<object>> {
        let response: AxiosResponse;

        try {
            response = await firstValueFrom(
                this.httpService.get(`${this.apiURL}/${type}`, {
                    params: params,
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                        'Content-Type': 'application/json',
                    },
                }),
            );

            return response.data;
        } catch (error) {
            if (error.response.status == 500) {
                throw new ExternalAPIException(error.response.data);
            }
            throw new InternalServerErrorException();
        }
    }

    /**
     * Função que gera um token para acessar os dados da API
     * @returns string response.data.accessToken
     */
    async generateToken(): Promise<string> {
        const clientCredentials: string = this.createClientCredentials();

        try {
            const response: AxiosResponse = await firstValueFrom(
                this.httpService.post(
                    `${this.apiURL}/oauth/token`,
                    {
                        grantType: 'client_credentials',
                    },
                    {
                        headers: {
                            Authorization: `Basic ${clientCredentials}`,
                            'Content-Type': 'application/json',
                        },
                    },
                ),
            );

            return response.data.accessToken;
        } catch (error) {
            throw new ExternalAPIException(error.response.data);
        }
    }

    /**
     * Função para pegar todos os pedidos no intervalo de uma hora
     * @returns Promise<Object> data
     */
    async getAllOrders(): Promise<Array<any>> {
        if (this.token == null) {
            await this.scheduleGenerateToken();
        }

        const { currentDateFormatted, minusOneHourDateFormatted } =
            getFormattedDates();

        const params: object = {
            initialUpdatedAt: minusOneHourDateFormatted,
            finalUpdatedAt: currentDateFormatted,
        };

        const data = await this.searchInAPI('orders', params);

        return data;
    }

    /**
     * Função para pegar todos os caixas no intervalo de uma hora
     * @returns Promise<Object> data
     */
    async getAllCashiers(): Promise<Array<object>> {
        if (this.token == null) {
            await this.scheduleGenerateToken();
        }

        const { currentDateFormatted, minusOneHourDateFormatted } =
            getFormattedDates();

        const params: object = {
            initialCreatedAt: minusOneHourDateFormatted,
            finalCreatedAt: currentDateFormatted,
        };
        const data = await this.searchInAPI('cashiers', params);

        return data;
    }

    async getOneCashier(body): Promise<any> {
        if (this.token == null) {
            await this.scheduleGenerateToken();
        }

        const data = await this.searchInAPI(`cashiers/${body.id}`, {});

        return data;
    }

    /**
     * Função para pegar todos os caixas no intervalo de uma hora
     * @returns Promise<Object> data
     */
    async getAllTaxInvoices(): Promise<Array<object>> {
        if (this.token == null) {
            await this.scheduleGenerateToken();
        }

        const { currentDateFormatted, minusOneHourDateFormatted } =
            getFormattedDates();

        const params: object = {
            initialUpdatedAt: minusOneHourDateFormatted,
            finalUpdatedAt: currentDateFormatted,
        };
        const data: Promise<Array<object>> = this.searchInAPI(
            'tax-invoices',
            params,
        );

        return data;
    }

    /**
     * Função que executa todas as buscas necessárias na API de hora em hora
     */
    @Cron(CronExpression.EVERY_HOUR)
    async scheduleCompleteSearch(): Promise<any> {
        await this.scheduleGenerateToken();
        await this.scheduleGetOrders();
        await this.scheduleGetCashiers();
    }

    /**
     * Função de emissão de log padrão para funções do job
     */
    sendDebugMessage(
        condition: boolean,
        successMessage: string,
        failureMessage: string,
    ): void {
        const message: string = condition ? successMessage : failureMessage;
        this.logger.debug(message);
    }

    /**
     * Função usada no job para buscar token
     * ? funções usadas no job não contêm a lógica, apenas executa e recebe o retorno da função com a lógica e emite um log
     */
    async scheduleGenerateToken(): Promise<any> {
        this.token = await this.generateToken();
        this.sendDebugMessage(
            typeof this.token == 'string',
            'Token gerado com sucesso',
            'O token não foi gerado',
        );
    }

    /**
     * Função usada no job para buscar todos os pedidos
     */
    async scheduleGetOrders(): Promise<any> {
        const data: Array<any> = await this.getAllOrders();

        await this.orderService.create(data);

        this.sendDebugMessage(
            data.length > 1,
            'Pedidos recuperados com sucesso',
            'Não há pedidos para recuperar',
        );
    }

    /**
     * Função usada no job para buscar todos os caixas
     */
    async scheduleGetCashiers(): Promise<any> {
        const data: Array<any> = await this.getAllCashiers();

        await this.cashierService.create(data);

        this.sendDebugMessage(
            data.length > 1,
            'Caixas recuperados com sucesso',
            'Não há caixas para recuperar',
        );
    }

    /**
     * Função usada no job para buscar todos as notas fiscais
     */
    async scheduleGetTaxInvoices(): Promise<any> {
        const data: Array<any> = await this.getAllTaxInvoices();

        this.sendDebugMessage(
            data.length > 1,
            'Notas recuperados com sucesso',
            'Não há notas para recuperar',
        );
    }
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */
