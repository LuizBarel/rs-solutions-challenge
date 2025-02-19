import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxInfoDto } from './create-tax-info.dto';

export class UpdateTaxInfoDto extends PartialType(CreateTaxInfoDto) {}
