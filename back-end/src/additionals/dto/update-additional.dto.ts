import { PartialType } from '@nestjs/mapped-types';
import { CreateAdditionalDto } from './create-additional.dto';

export class UpdateAdditionalDto extends PartialType(CreateAdditionalDto) {}
