import { Controller, Get } from '@nestjs/common';
import { SeruApiService } from './seru-api.service';

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

    @Get('taxInvoices')
    async getTaxInvoices() {
        return this.seruApiService.getAllTaxInvoices();
    }
}
