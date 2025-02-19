import { PartialType } from '@nestjs/mapped-types';
import { CreateCofinDto } from './create-cofin.dto';

export class UpdateCofinDto extends PartialType(CreateCofinDto) {}
