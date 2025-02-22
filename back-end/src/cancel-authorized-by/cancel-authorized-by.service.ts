import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CancelAuthorizedBy } from 'src/database/entities/cancel-authorized-by.entity';
import { Repository } from 'typeorm';
// import { CreateCancelAuthorizedByDto } from './dto/create-cancel-authorized-by.dto';
// import { UpdateCancelAuthorizedByDto } from './dto/update-cancel-authorized-by.dto';
/* eslint-disable */

@Injectable()
export class CancelAuthorizedByService {
    constructor(
        @InjectRepository(CancelAuthorizedBy)
        private cancelAuthorizedByRepository: Repository<CancelAuthorizedBy>,
    ) {}

    async create(cancelAuthorizedBy) {
        const cancelAuthorizedByExisting =
            await this.cancelAuthorizedByRepository.findOneBy({
                code: cancelAuthorizedBy.code,
            });
        if (cancelAuthorizedByExisting) return cancelAuthorizedByExisting;

        const dataForCancelAuthorizedBy =
            this.cancelAuthorizedByRepository.create({
                name: cancelAuthorizedBy.name,
                email: cancelAuthorizedBy.email,
                document: cancelAuthorizedBy.document,
                code: cancelAuthorizedBy.code,
            });

        return this.cancelAuthorizedByRepository.save(
            dataForCancelAuthorizedBy,
        );
    }
}
