import { PartialType } from '@nestjs/mapped-types';
import { CreateCancelAuthorizedByDto } from './create-cancel-authorized-by.dto';

export class UpdateCancelAuthorizedByDto extends PartialType(
    CreateCancelAuthorizedByDto,
) {}
