import { PartialType } from '@nestjs/mapped-types';
import { CreateIcmDto } from './create-icm.dto';

export class UpdateIcmDto extends PartialType(CreateIcmDto) {}
