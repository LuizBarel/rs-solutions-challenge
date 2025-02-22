import { forwardRef, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from 'src/database/entities/order.entity';
import { SalesChannelModule } from 'src/sales-channel/sales-channel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from 'src/company/company.module';
import { CashiersModule } from 'src/cashiers/cashiers.module';
import { CanceledByModule } from 'src/canceled-by/canceled-by.module';
import { CancelAuthorizedByModule } from 'src/cancel-authorized-by/cancel-authorized-by.module';
import { CreatedByModule } from 'src/created-by/created-by.module';
import { CustomerModule } from 'src/customer/customer.module';
import { DeliveryModule } from 'src/delivery/delivery.module';
import { ItemsModule } from 'src/items/items.module';
import { PaymentsModule } from 'src/payments/payments.module';
import { TableModule } from 'src/table/table.module';
import { TaxInvoiceModule } from 'src/tax-invoice/tax-invoice.module';
import { TicketModule } from 'src/ticket/ticket.module';

@Module({
    imports: [
        forwardRef(() => SalesChannelModule),
        forwardRef(() => CashiersModule),
        TypeOrmModule.forFeature([Order]),
        CanceledByModule,
        CancelAuthorizedByModule,
        CompanyModule,
        CreatedByModule,
        CustomerModule,
        DeliveryModule,
        forwardRef(() => ItemsModule),
        PaymentsModule,
        forwardRef(() => SalesChannelModule),
        TableModule,
        TaxInvoiceModule,
        TicketModule,
    ],
    controllers: [OrdersController],
    providers: [OrdersService],
    exports: [OrdersService],
})
export class OrdersModule {}
