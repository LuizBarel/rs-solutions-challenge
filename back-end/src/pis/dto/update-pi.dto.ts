import { PartialType } from '@nestjs/mapped-types';
import { CreatePiDto } from './create-pi.dto';

export class UpdatePiDto extends PartialType(CreatePiDto) {}
