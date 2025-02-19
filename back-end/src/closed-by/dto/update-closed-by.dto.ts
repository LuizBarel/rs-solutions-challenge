import { PartialType } from '@nestjs/mapped-types';
import { CreateClosedByDto } from './create-closed-by.dto';

export class UpdateClosedByDto extends PartialType(CreateClosedByDto) {}
