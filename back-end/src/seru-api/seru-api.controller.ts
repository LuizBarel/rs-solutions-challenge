import { Controller, Get, Param } from '@nestjs/common';
import { SeruApiService } from './seru-api.service';
/* eslint-disable */

@Controller('seru-api')
export class SeruApiController {
    constructor(private readonly seruApiService: SeruApiService) {}

    @Get('token')
    async getToken() {
        return this.seruApiService.generateToken();
    }

    @Get('orders')
    async getOrders() {
        return this.seruApiService.getAllOrders();
    }

    @Get('cashiers')
    async getCashiers() {
        return this.seruApiService.getAllCashiers();
    }

    @Get('cashiers/:id')
    async getCashiersId(@Param() id) {
        return this.seruApiService.getOneCashier(id);
    }

    @Get('taxInvoices')
    async getTaxInvoices() {
        return this.seruApiService.getAllTaxInvoices();
    }
}
