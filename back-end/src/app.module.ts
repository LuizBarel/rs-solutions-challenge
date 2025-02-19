import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AdditionalsModule } from './additionals/additionals.module';
import { AddressModule } from './address/address.module';
import { BlockedByModule } from './blocked-by/blocked-by.module';
import { CancelAuthorizedByModule } from './cancel-authorized-by/cancel-authorized-by.module';
import { CanceledByModule } from './canceled-by/canceled-by.module';
import { CardModule } from './card/card.module';
import { CashiersModule } from './cashiers/cashiers.module';
import { ClosedByModule } from './closed-by/closed-by.module';
import { CofinsModule } from './cofins/cofins.module';
import { CompanyModule } from './company/company.module';
import { CreatedByModule } from './created-by/created-by.module';
import { CustomerModule } from './customer/customer.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DeviceModule } from './device/device.module';
import { IcmsModule } from './icms/icms.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ItemsModule } from './items/items.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { PisModule } from './pis/pis.module';
import { PlanModule } from './plan/plan.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { RecurrenceModule } from './recurrence/recurrence.module';
import { ResponseModule } from './response/response.module';
import { SalesChannelModule } from './sales-channel/sales-channel.module';
import { SubItemsModule } from './sub-items/sub-items.module';
import { TableModule } from './table/table.module';
import { TaxInfoModule } from './tax-info/tax-info.module';
import { TaxInvoiceModule } from './tax-invoice/tax-invoice.module';
import { TicketModule } from './ticket/ticket.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeruApiModule } from './seru-api/seru-api.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        HttpModule,
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('POSTGRES_HOST'),
                port: +configService.get('POSTGRES_PORT'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DB'),
                autoLoadEntities: true,
                synchronize: true,
            }),
        }),
        UserModule,
        AuthModule,
        SeruApiModule,
        SalesChannelModule,
        CompanyModule,
        ItemsModule,
        CardModule,
        PaymentsModule,
        CustomerModule,
        DeliveryModule,
        TableModule,
        TicketModule,
        CreatedByModule,
        TransactionsModule,
        ReceiptsModule,
        BlockedByModule,
        ClosedByModule,
        DeviceModule,
        CashiersModule,
        TaxInvoiceModule,
        CanceledByModule,
        CancelAuthorizedByModule,
        OrdersModule,
        AddressModule,
        PlanModule,
        RecurrenceModule,
        ResponseModule,
        InvoiceModule,
        AdditionalsModule,
        IcmsModule,
        PisModule,
        CofinsModule,
        TaxInfoModule,
        SubItemsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
