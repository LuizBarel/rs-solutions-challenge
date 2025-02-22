import { forwardRef, Inject, Injectable } from '@nestjs/common';
// import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CancelAuthorizedByService } from 'src/cancel-authorized-by/cancel-authorized-by.service';
import { CanceledByService } from 'src/canceled-by/canceled-by.service';
import { CashiersService } from 'src/cashiers/cashiers.service';
import { CompanyService } from 'src/company/company.service';
import { CreatedByService } from 'src/created-by/created-by.service';
import { CustomerService } from 'src/customer/customer.service';
import { Order } from 'src/database/entities/order.entity';
import { DeliveryService } from 'src/delivery/delivery.service';
import { ItemsService } from 'src/items/items.service';
import { PaymentsService } from 'src/payments/payments.service';
import { SalesChannelService } from 'src/sales-channel/sales-channel.service';
import { TableService } from 'src/table/table.service';
import { TaxInvoiceService } from 'src/tax-invoice/tax-invoice.service';
import { TicketService } from 'src/ticket/ticket.service';
import { Repository } from 'typeorm';
/* eslint-disable */

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        private salesService: SalesChannelService,
        private companyService: CompanyService,
        @Inject(forwardRef(() => CashiersService))
        private cashierService: CashiersService,
        private paymentsService: PaymentsService,
        private itemsService: ItemsService,
        private customerService: CustomerService,
        private taxInvoiceService: TaxInvoiceService,
        private deliveryService: DeliveryService,
        private tableService: TableService,
        private ticketService: TicketService,
        private createdByService: CreatedByService,
        private canceledByService: CanceledByService,
        private cancelAuthorizedByService: CancelAuthorizedByService,
    ) {}

    async create(data) {
        for (const order of data) {
            const existingOrder = await this.orderRepository.findOneBy({
                stringOrder: order.id,
            });
            if (existingOrder) continue;

            let sales,
                company,
                cashier,
                customer,
                taxInvoice,
                delivery,
                table,
                ticket,
                createdBy,
                canceledBy,
                cancelAuthorizedBy;

            if (order.salesChannel)
                sales = await this.salesService.create(order.salesChannel);
            if (order.company)
                company = await this.companyService.create(order.company);
            if (order.cashier)
                cashier = await this.cashierService.createForOrder(
                    order.cashier,
                );
            if (order.customer)
                customer = await this.customerService.create(order.customer);
            if (order.taxInvoice)
                taxInvoice = await this.taxInvoiceService.create(
                    order.taxInvoice,
                );
            if (order.delivery)
                delivery = await this.deliveryService.create(order.delivery);
            if (order.table)
                table = await this.tableService.create(order.table);
            if (order.ticket)
                ticket = await this.ticketService.create(order.ticket);
            if (order.createdBy)
                createdBy = await this.createdByService.create(order.createdBy);
            if (order.canceledBy)
                canceledBy = await this.canceledByService.create(
                    order.canceledBy,
                );
            if (order.cancelAuthorizedBy)
                cancelAuthorizedBy =
                    await this.cancelAuthorizedByService.create(
                        order.cancelAuthorizedBy,
                    );
            if (order.salesChannel)
                sales = await this.salesService.create(order.salesChannel);
            if (order.company)
                company = await this.companyService.create(order.company);
            if (order.cashier)
                cashier = await this.cashierService.createForOrder(
                    order.cashier,
                );
            if (order.customer)
                customer = await this.customerService.create(order.customer);
            if (order.taxInvoice)
                taxInvoice = await this.taxInvoiceService.create(
                    order.taxInvoice,
                );
            if (order.delivery)
                delivery = await this.deliveryService.create(order.delivery);
            if (order.table)
                table = await this.tableService.create(order.table);
            if (order.ticket)
                ticket = await this.ticketService.create(order.ticket);
            if (order.createdBy)
                createdBy = await this.createdByService.create(order.createdBy);
            if (order.canceledBy)
                canceledBy = await this.canceledByService.create(
                    order.canceledBy,
                );
            if (order.cancelAuthorizedBy)
                cancelAuthorizedBy =
                    await this.cancelAuthorizedByService.create(
                        order.cancelAuthorizedBy,
                    );

            const dataForOrder = this.orderRepository.create({
                status: order.status,
                type: order.type,
                code: order.code,
                salesChannel: sales,
                createdAt: order.createdAt,
                updatedAt: order.updatedAt,
                company: company,
                discount: order.discount,
                serviceCharge: order.serviceCharge,
                subtotal: order.subtotal,
                total: order.total,
                customer: customer,
                taxInvoice: taxInvoice,
                note: order.note,
                appVersion: order.appVersion,
                delivery: delivery,
                consumingMode: order.consumingMode,
                table: table,
                ticket: ticket,
                cashiers: cashier,
                createdBy: createdBy,
                canceledAt: order.canceledAt,
                canceledBy: canceledBy,
                cancelAuthorizedBy: cancelAuthorizedBy,
                stringOrder: order.id,
                responseOriginJson: order,
            });

            const createdOrder = await this.orderRepository.save(dataForOrder);

            for (const payment of order.payments) {
                this.paymentsService.create(payment, createdOrder.idOrders);
            }

            for (const item of order.items) {
                this.itemsService.create(item, createdOrder.idOrders);
            }
        }
    }

    async getInvoicingInAMonth() {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const previousMonth = month === 1 ? 12 : month - 1;
        const previousYear = month === 1 ? year - 1 : year;

        let currentMonthSum: any = await this.querySum(month, year);
        let previousMonthSum: any = await this.querySum(
            previousMonth,
            previousYear,
        );

        previousMonthSum =
            previousMonthSum != null && !isNaN(+previousMonthSum)
                ? +previousMonthSum
                : 0;
        currentMonthSum = +currentMonthSum[0].sum;

        const percent: number =
            previousMonthSum == 0
                ? 100
                : ((+currentMonthSum - +previousMonthSum) / +previousMonthSum) *
                  100;

        return {
            currentSum: currentMonthSum,
            previousSum: previousMonthSum,
            percentBetweenSums: percent,
        };
    }

    async getAllOrdersInAMonth() {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const previousMonth = month === 1 ? 12 : month - 1;
        const previousYear = month === 1 ? year - 1 : year;

        const qtdOrders = await this.queryCount(month, year);
        const previousQtdOrders = await this.queryCount(
            previousMonth,
            previousYear,
        );

        return {
            qtdOrders,
            previousQtdOrders,
        };
    }

    async getMonthlyTicket() {
        const { qtdOrders, previousQtdOrders } =
            await this.getAllOrdersInAMonth();
        const { currentSum, previousSum } = await this.getInvoicingInAMonth();

        const ticket = currentSum / qtdOrders;
        const previousTicket = previousSum / previousQtdOrders || 0;
        return {
            ticket,
            previousTicket,
        };
    }

    private async querySum(month, year) {
        return await this.orderRepository
            .createQueryBuilder('orders')
            .select(['SUM(orders.total)'])
            .where('EXTRACT(MONTH FROM orders.updatedAt) = :month', { month })
            .andWhere('EXTRACT(YEAR FROM orders.updatedAt) = :year', { year })
            .andWhere('orders.status != :status', { status: 'canceled' })
            .innerJoin(
                'payments',
                'payment',
                'payment.orderId = orders.idOrders',
            )
            .andWhere('payment.status_payments = :paymentStatus', {
                paymentStatus: 'approved',
            })
            .getRawMany();
    }

    private async queryCount(month, year) {
        return await this.orderRepository
            .createQueryBuilder('orders')
            .select(['orders.id'])
            .where('EXTRACT(MONTH FROM orders.updatedAt) = :month', { month })
            .andWhere('EXTRACT(YEAR FROM orders.updatedAt) = :year', { year })
            .andWhere('orders.status != :status', { status: 'canceled' })
            .innerJoin(
                'payments',
                'payment',
                'payment.orderId = orders.idOrders',
            )
            .andWhere('payment.status_payments = :paymentStatus', {
                paymentStatus: 'approved',
            })
            .getCount();
    }
}
