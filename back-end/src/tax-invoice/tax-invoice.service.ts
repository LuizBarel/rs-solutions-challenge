import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxInvoice } from 'src/database/entities/tax-invoice.entity';
import { Repository } from 'typeorm';
// import { CreateTaxInvoiceDto } from './dto/create-tax-invoice.dto';
// import { UpdateTaxInvoiceDto } from './dto/update-tax-invoice.dto';
/* eslint-disable */

@Injectable()
export class TaxInvoiceService {
    constructor(
        @InjectRepository(TaxInvoice)
        private taxInvoiceRepository: Repository<TaxInvoice>,
    ) {}

    async create(taxInvoice) {
        const taxInvoiceExisting = await this.taxInvoiceRepository.findOneBy({
            stringTaxInvoice: taxInvoice.id,
        });
        if (taxInvoiceExisting) return taxInvoiceExisting;

        const dataForTaxInvoice = this.taxInvoiceRepository.create({
            stringTaxInvoice: taxInvoice.id,
            number: taxInvoice.number,
            xml: taxInvoice.xml,
            status: taxInvoice.status,
            serialNumber: taxInvoice.serialNumber,
            accessKey: taxInvoice.accessKey,
            url: taxInvoice.url,
            createdAt: taxInvoice.createdAt,
        });

        return this.taxInvoiceRepository.save(dataForTaxInvoice);
    }
}
