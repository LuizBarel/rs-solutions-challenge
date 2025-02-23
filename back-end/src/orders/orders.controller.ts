import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pedidos')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get('')
    @ApiOperation({ summary: 'Busca a quantidade total de pedidos' })
    @ApiResponse({
        status: 200,
        description:
            'Quantidade total de pedidos e quantidade de pedidos mensal atual',
    })
    async getOrders() {
        return this.ordersService.getAllQtdOrders();
    }

    @Get('invoicing')
    @ApiOperation({ summary: 'Busca o faturamento total' })
    @ApiResponse({
        status: 200,
        description: 'Faturamento total e faturamento mensal atual',
    })
    async getInvoicing() {
        return this.ordersService.getInvoicing();
    }

    @Get('month-invoicing')
    @ApiOperation({ summary: 'Busca o faturamento dos meses' })
    @ApiResponse({
        status: 200,
        description: 'Faturamento de cada mês deste ano e do ano passado',
    })
    async getMonthlyInvoicing() {
        return this.ordersService.getMonthlyInvoicing();
    }

    @Get('ticket')
    @ApiOperation({ summary: 'Busca o ticket' })
    @ApiResponse({ status: 200, description: 'Ticket total e ticket mensal' })
    async getTicket() {
        return this.ordersService.getTicket();
    }

    @Get('channels')
    @ApiOperation({ summary: 'Busca dados agrupados por canais de venda' })
    @ApiResponse({
        status: 200,
        description:
            'Dados de qtd de pedidos e itens, faturamento total, porcentagem perante ao total de todos os canais, ticket e tag do canal.\nTudo agrupado por canal',
    })
    async getByChannels() {
        return this.ordersService.getOrdersByChannel();
    }
}
