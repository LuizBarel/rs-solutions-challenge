import { Injectable } from '@nestjs/common';
import { TaxInvoice } from 'src/database/entities/tax-invoice.entity';
import { QueryRunner } from 'typeorm';
// import { CreateTaxInvoiceDto } from './dto/create-tax-invoice.dto';
// import { UpdateTaxInvoiceDto } from './dto/update-tax-invoice.dto';
/* eslint-disable */

@Injectable()
export class TaxInvoiceService {
    async create(taxInvoice, queryRunner: QueryRunner) {
        try {
            const taxInvoiceExisting = await queryRunner.manager.findOneBy(
                TaxInvoice,
                { stringTaxInvoice: taxInvoice.id },
            );
            if (taxInvoiceExisting) return taxInvoiceExisting;

            const dataForTaxInvoice = queryRunner.manager.create(TaxInvoice, {
                stringTaxInvoice: taxInvoice.id,
                number: taxInvoice.number,
                xml: taxInvoice.xml,
                status: taxInvoice.status,
                serialNumber: taxInvoice.serialNumber,
                accessKey: taxInvoice.accessKey,
                url: taxInvoice.url,
                createdAt: taxInvoice.createdAt,
            });

            return await queryRunner.manager.save(
                TaxInvoice,
                dataForTaxInvoice,
            );
        } catch (error) {
            console.log('Erro ao criar nota fiscal: ' + error);
            throw error;
        }
    }
}
