import { PartialType } from '@nestjs/mapped-types';
import { CreateResponseDto } from './create-response.dto';

export class UpdateResponseDto extends PartialType(CreateResponseDto) {}
