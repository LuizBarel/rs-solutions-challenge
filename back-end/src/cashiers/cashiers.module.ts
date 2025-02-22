import { forwardRef, Module } from '@nestjs/common';
import { CashiersService } from './cashiers.service';
import { SalesChannelModule } from 'src/sales-channel/sales-channel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cashier } from 'src/database/entities/cashier.entity';
import { CompanyModule } from 'src/company/company.module';
import { CreatedByModule } from 'src/created-by/created-by.module';
import { BlockedByModule } from 'src/blocked-by/blocked-by.module';
import { ClosedByModule } from 'src/closed-by/closed-by.module';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { DeviceModule } from 'src/device/device.module';
import { ReceiptsModule } from 'src/receipts/receipts.module';
import { SeruApiModule } from 'src/seru-api/seru-api.module';

@Module({
    imports: [
        forwardRef(() => SalesChannelModule),
        TypeOrmModule.forFeature([Cashier]),
        CompanyModule,
        SalesChannelModule,
        CreatedByModule,
        BlockedByModule,
        ClosedByModule,
        TransactionsModule,
        DeviceModule,
        ReceiptsModule,
        forwardRef(() => SeruApiModule),
    ],
    controllers: [],
    providers: [CashiersService],
    exports: [CashiersService],
})
export class CashiersModule {}
