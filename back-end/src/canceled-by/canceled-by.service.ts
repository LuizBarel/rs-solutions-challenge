import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CanceledBy } from 'src/database/entities/canceled-by.entity';
import { Repository } from 'typeorm';
// import { CreateCanceledByDto } from './dto/create-canceled-by.dto';
// import { UpdateCanceledByDto } from './dto/update-canceled-by.dto';
/* eslint-disable */

@Injectable()
export class CanceledByService {
    constructor(
        @InjectRepository(CanceledBy)
        private canceledByRepository: Repository<CanceledBy>,
    ) {}

    async create(canceledBy) {
        const canceledByExisting = await this.canceledByRepository.findOneBy({
            code: canceledBy.code,
        });
        if (canceledByExisting) return canceledByExisting;

        const dataForCanceledBy = this.canceledByRepository.create({
            name: canceledBy.name,
            email: canceledBy.email,
            document: canceledBy.document,
            code: canceledBy.code,
        });

        return this.canceledByRepository.save(dataForCanceledBy);
    }
}
