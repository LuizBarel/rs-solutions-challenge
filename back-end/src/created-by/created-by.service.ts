import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatedBy } from 'src/database/entities/created-by.entity';
import { Repository } from 'typeorm';
// import { CreateCreatedByDto } from './dto/create-created-by.dto';
// import { UpdateCreatedByDto } from './dto/update-created-by.dto';
/* eslint-disable */

@Injectable()
export class CreatedByService {
    constructor(
        @InjectRepository(CreatedBy)
        private createdByRepository: Repository<CreatedBy>,
    ) {}

    async create(createdBy) {
        const createdByExisting = await this.createdByRepository.findOneBy({
            code: createdBy.code,
        });
        if (createdByExisting) return createdByExisting;

        const dataForCreatedBy = this.createdByRepository.create({
            name: createdBy.name,
            email: createdBy.email,
            document: createdBy.document,
            code: createdBy.code,
        });

        return this.createdByRepository.save(dataForCreatedBy);
    }

    async findOneByCode(code) {
        const createdBy = await this.createdByRepository.findOneBy({
            code: code,
        });
        return createdBy;
    }
}
