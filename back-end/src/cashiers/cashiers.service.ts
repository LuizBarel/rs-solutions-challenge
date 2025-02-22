import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
import { Repository } from 'typeorm';
// import { CreateCashierDto } from './dto/create-cashier.dto';
// import { UpdateCashierDto } from './dto/update-cashier.dto';
/* eslint-disable */

@Injectable()
export class CashiersService {
    constructor(
        @InjectRepository(Cashier)
        private cashierRepository: Repository<Cashier>,
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

    async create(data) {
        for (const cashier of data) {
            let company,
                salesChannel,
                createdBy,
                blockedBy,
                closedBy,
                transactions,
                receipts,
                device;
            const cashierExisting = await this.cashierRepository.findOneBy({
                stringCashiers: cashier.id,
            });
            if (cashierExisting) continue;

            if (cashier.company)
                company = await this.companyService.create(cashier.company);
            if (cashier.salesChannel)
                salesChannel = await this.salesService.create(
                    cashier.salesChannel,
                );
            if (cashier.createdBy)
                createdBy = await this.createdByService.create(
                    cashier.createdBy,
                );
            if (cashier.blockedBy)
                blockedBy = await this.blockedByService.create(
                    cashier.blockedBy,
                );
            if (cashier.closedBy)
                closedBy = await this.closedByService.create(cashier.closedBy);
            if (cashier.receipts)
                receipts = await this.receiptsService.create(cashier.receipts);
            if (cashier.device)
                device = await this.deviceService.create(cashier.device);

            const dataForCashier = this.cashierRepository.create({
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

            const cashierCreated =
                await this.cashierRepository.save(dataForCashier);

            if (cashier.transactions)
                transactions = await this.transactionsService.create(
                    cashier.transactions,
                    cashierCreated.idCashiers,
                );
        }

        return data;
    }

    async createForOrder(cashier) {
        try {
            let company,
                salesChannel,
                createdBy,
                blockedBy,
                closedBy,
                transactions,
                receipts,
                device;
            const cashierExisting = await this.cashierRepository.findOneBy({
                stringCashiers: cashier.id,
            });
            if (cashierExisting) return cashierExisting;

            const findCashiersOrder = await this.seruApiService.getOneCashier({
                id: cashier.id,
            });
            if (!findCashiersOrder) return null;

            if (findCashiersOrder.company)
                company = await this.companyService.create(
                    findCashiersOrder.company,
                );
            if (findCashiersOrder.salesChannel)
                salesChannel = await this.salesService.create(
                    findCashiersOrder.salesChannel,
                );
            if (findCashiersOrder.createdBy)
                createdBy = await this.createdByService.create(
                    findCashiersOrder.createdBy,
                );
            if (findCashiersOrder.blockedBy)
                blockedBy = await this.blockedByService.create(
                    findCashiersOrder.blockedBy,
                );
            if (findCashiersOrder.closedBy)
                closedBy = await this.closedByService.create(
                    findCashiersOrder.closedBy,
                );
            if (findCashiersOrder.receipts)
                receipts = await this.receiptsService.create(
                    findCashiersOrder.receipts,
                );
            if (findCashiersOrder.device)
                device = await this.deviceService.create(
                    findCashiersOrder.device,
                );

            const dataForCashier = this.cashierRepository.create({
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

            const cashierCreated =
                await this.cashierRepository.save(dataForCashier);

            if (findCashiersOrder.transactions)
                transactions = await this.transactionsService.create(
                    findCashiersOrder.transactions,
                    cashierCreated.idCashiers,
                );
        } catch (error) {
            console.log('Erro ao criar cashier: ' + error.message);
        }
    }
}
