import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockedBy } from 'src/database/entities/blocked-by.entity';
import { Repository } from 'typeorm';
// import { CreateBlockedByDto } from './dto/create-blocked-by.dto';
// import { UpdateBlockedByDto } from './dto/update-blocked-by.dto';
/* eslint-disable */

@Injectable()
export class BlockedByService {
    constructor(
        @InjectRepository(BlockedBy)
        private blockedByRepository: Repository<BlockedBy>,
    ) {}

    async create(blockedBy) {
        const blockedByExisting = await this.blockedByRepository.findOneBy({
            code: blockedBy.code,
        });
        if (blockedByExisting) return blockedByExisting.idblockedBy;

        const dataForBlockedBy = this.blockedByRepository.create({
            name: blockedBy.name,
            email: blockedBy.email,
            document: blockedBy.document,
            code: blockedBy.code,
        });

        return this.blockedByRepository.save(dataForBlockedBy);
    }
}
