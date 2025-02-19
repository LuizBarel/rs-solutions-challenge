import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockedByDto } from './create-blocked-by.dto';

export class UpdateBlockedByDto extends PartialType(CreateBlockedByDto) {}
