import { PartialType } from '@nestjs/mapped-types';
import { CreateCashierDto } from './create-cashier.dto';

export class UpdateCashierDto extends PartialType(CreateCashierDto) {}
