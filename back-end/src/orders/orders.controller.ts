import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get('')
    async getOrders() {
        return this.ordersService.getAllOrders();
    }

    @Get('invoicing')
    async getInvoicing() {
        return this.ordersService.getInvoicing();
    }

    @Get('month-invoicing')
    async getMonthlyInvoicing() {
        return this.ordersService.getMonthlyInvoicing();
    }

    @Get('ticket')
    async getTicket() {
        return this.ordersService.getTicket();
    }

    @Get('channels')
    async getByChannels() {
        return this.ordersService.getOrdersByChannel();
    }
}
