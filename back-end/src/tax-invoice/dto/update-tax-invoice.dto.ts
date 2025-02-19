import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxInvoiceDto } from './create-tax-invoice.dto';

export class UpdateTaxInvoiceDto extends PartialType(CreateTaxInvoiceDto) {}
