import { PartialType } from '@nestjs/mapped-types';
import { CreateCanceledByDto } from './create-canceled-by.dto';

export class UpdateCanceledByDto extends PartialType(CreateCanceledByDto) {}
