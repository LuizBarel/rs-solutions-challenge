import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesChannelDto } from './create-sales-channel.dto';

export class UpdateSalesChannelDto extends PartialType(CreateSalesChannelDto) {}
