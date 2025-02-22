import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClosedBy } from 'src/database/entities/closed-by.entity';
import { Repository } from 'typeorm';
// import { CreateClosedByDto } from './dto/create-closed-by.dto';
// import { UpdateClosedByDto } from './dto/update-closed-by.dto';
/* eslint-disable */

@Injectable()
export class ClosedByService {
    constructor(
        @InjectRepository(ClosedBy)
        private closedByRepository: Repository<ClosedBy>,
    ) {}

    async create(closedBy) {
        const closedByExisting = await this.closedByRepository.findOneBy({
            code: closedBy.code,
        });
        if (closedByExisting) return closedByExisting.idclosedBy;

        const dataForClosedBy = this.closedByRepository.create({
            name: closedBy.name,
            email: closedBy.email,
            document: closedBy.document,
            code: closedBy.code,
        });

        return this.closedByRepository.save(dataForClosedBy);
    }
}
