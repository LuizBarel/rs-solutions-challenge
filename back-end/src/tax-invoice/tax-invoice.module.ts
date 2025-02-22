import { Module } from '@nestjs/common';
import { TaxInvoiceService } from './tax-invoice.service';
import { TaxInvoice } from 'src/database/entities/tax-invoice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([TaxInvoice])],
    controllers: [],
    providers: [TaxInvoiceService],
    exports: [TaxInvoiceService],
})
export class TaxInvoiceModule {}
