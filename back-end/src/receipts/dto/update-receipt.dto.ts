import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiptDto } from './create-receipt.dto';

export class UpdateReceiptDto extends PartialType(CreateReceiptDto) {}
