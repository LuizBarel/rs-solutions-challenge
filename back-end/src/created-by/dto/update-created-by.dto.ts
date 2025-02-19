import { PartialType } from '@nestjs/mapped-types';
import { CreateCreatedByDto } from './create-created-by.dto';

export class UpdateCreatedByDto extends PartialType(CreateCreatedByDto) {}
