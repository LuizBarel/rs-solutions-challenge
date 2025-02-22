import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get('ordersInAMonth')
    async getOrders() {
        return this.ordersService.getAllOrdersInAMonth();
    }

    @Get('invoicingInAMonth')
    async getInvoicing() {
        return this.ordersService.getInvoicingInAMonth();
    }

    @Get('ticket')
    async getTicket() {
        return this.ordersService.getMonthlyTicket();
    }
}
