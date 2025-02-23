import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { BlockedByService } from 'src/blocked-by/blocked-by.service';
import { ClosedByService } from 'src/closed-by/closed-by.service';
import { CompanyService } from 'src/company/company.service';
import { CreatedByService } from 'src/created-by/created-by.service';
import { Cashier } from 'src/database/entities/cashier.entity';
import { DeviceService } from 'src/device/device.service';
import { ReceiptsService } from 'src/receipts/receipts.service';
import { SalesChannelService } from 'src/sales-channel/sales-channel.service';
import { SeruApiService } from 'src/seru-api/seru-api.service';
import { TransactionsService } from 'src/transactions/transactions.service';
import { DataSource, QueryRunner } from 'typeorm';
// import { CreateCashierDto } from './dto/create-cashier.dto';
// import { UpdateCashierDto } from './dto/update-cashier.dto';
/* eslint-disable */

@Injectable()
export class CashiersService {
    constructor(
        private dataSource: DataSource,
        private companyService: CompanyService,
        private salesService: SalesChannelService,
        private createdByService: CreatedByService,
        private blockedByService: BlockedByService,
        private closedByService: ClosedByService,
        private transactionsService: TransactionsService,
        private receiptsService: ReceiptsService,
        private deviceService: DeviceService,
        @Inject(forwardRef(() => SeruApiService))
        private seruApiService: SeruApiService,
    ) {}

    /**
     * Função que cria caixas a partir dos dados direto da API (pela rota /cashiers)
     */
    async create(data) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            for (const cashier of data) {
                let company,
                    salesChannel,
                    createdBy,
                    blockedBy,
                    closedBy,
                    receipts,
                    device;

                const cashierExisting = await queryRunner.manager.findOneBy(
                    Cashier,
                    { stringCashiers: cashier.id },
                );
                if (cashierExisting) continue;

                if (cashier.company)
                    company = await this.companyService.create(
                        cashier.company,
                        queryRunner,
                    );
                if (cashier.salesChannel)
                    salesChannel = await this.salesService.create(
                        cashier.salesChannel,
                        queryRunner,
                    );
                if (cashier.createdBy)
                    createdBy = await this.createdByService.create(
                        cashier.createdBy,
                        queryRunner,
                    );
                if (cashier.blockedBy)
                    blockedBy = await this.blockedByService.create(
                        cashier.blockedBy,
                        queryRunner,
                    );
                if (cashier.closedBy)
                    closedBy = await this.closedByService.create(
                        cashier.closedBy,
                        queryRunner,
                    );
                if (cashier.receipts)
                    receipts = await this.receiptsService.create(
                        cashier.receipts,
                        queryRunner,
                    );
                if (cashier.device)
                    device = await this.deviceService.create(
                        cashier.device,
                        queryRunner,
                    );

                const dataForCashier = queryRunner.manager.create(Cashier, {
                    stringCashiers: cashier.id,
                    blockedAt: cashier.blockedAt,
                    closedAt: cashier.closedAt,
                    createdAt: cashier.createdAt,
                    code: cashier.code,
                    status: cashier.status,
                    company: company,
                    salesChannel: salesChannel,
                    createdBy: createdBy,
                    blockedBy: blockedBy,
                    closedBy: closedBy,
                    receipts: receipts,
                    device: device,
                });

                const cashierCreated = await queryRunner.manager.save(
                    Cashier,
                    dataForCashier,
                );

                if (cashier.transactions)
                    await this.transactionsService.create(
                        cashier.transactions,
                        cashierCreated.idCashiers,
                        queryRunner,
                    );
            }

            await queryRunner.commitTransaction();
            return data;
        } catch (error) {
            console.error('Erro ao criar o caixa:', error);
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }
    }

    /**
     * Função para criar um caixa que veio pelo pedido (com menos informação)
     */
    async createForOrder(cashier, queryRunner: QueryRunner) {
        try {
            let company,
                salesChannel,
                createdBy,
                blockedBy,
                closedBy,
                receipts,
                device;

            const cashierExisting = await queryRunner.manager.findOneBy(
                Cashier,
                { stringCashiers: cashier.id },
            );
            if (cashierExisting) return cashierExisting;

            const findCashiersOrder = await this.seruApiService.getOneCashier({
                id: cashier.id,
            });
            if (!findCashiersOrder) return null;

            if (findCashiersOrder.company)
                company = await this.companyService.create(
                    findCashiersOrder.company,
                    queryRunner,
                );
            if (findCashiersOrder.salesChannel)
                salesChannel = await this.salesService.create(
                    findCashiersOrder.salesChannel,
                    queryRunner,
                );
            if (findCashiersOrder.createdBy)
                createdBy = await this.createdByService.create(
                    findCashiersOrder.createdBy,
                    queryRunner,
                );
            if (findCashiersOrder.blockedBy)
                blockedBy = await this.blockedByService.create(
                    findCashiersOrder.blockedBy,
                    queryRunner,
                );
            if (findCashiersOrder.closedBy)
                closedBy = await this.closedByService.create(
                    findCashiersOrder.closedBy,
                    queryRunner,
                );
            if (findCashiersOrder.receipts)
                receipts = await this.receiptsService.create(
                    findCashiersOrder.receipts,
                    queryRunner,
                );
            if (findCashiersOrder.device)
                device = await this.deviceService.create(
                    findCashiersOrder.device,
                    queryRunner,
                );

            const dataForCashier = queryRunner.manager.create(Cashier, {
                stringCashiers: findCashiersOrder.id,
                blockedAt: findCashiersOrder.blockedAt,
                closedAt: findCashiersOrder.closedAt,
                createdAt: findCashiersOrder.createdAt,
                code: findCashiersOrder.code,
                status: findCashiersOrder.status,
                company: company,
                salesChannel: salesChannel,
                createdBy: createdBy,
                blockedBy: blockedBy,
                closedBy: closedBy,
                receipts: receipts,
                device: device,
            });

            const cashierCreated = await queryRunner.manager.save(
                Cashier,
                dataForCashier,
            );

            if (findCashiersOrder.transactions)
                await this.transactionsService.create(
                    findCashiersOrder.transactions,
                    cashierCreated.idCashiers,
                    queryRunner,
                );
        } catch (error) {
            console.log('Erro ao criar caixa via order: ' + error);
            throw error;
        }
    }
}
