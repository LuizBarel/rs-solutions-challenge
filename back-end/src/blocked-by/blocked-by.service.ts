import { Injectable } from '@nestjs/common';
import { BlockedBy } from 'src/database/entities/blocked-by.entity';
import { QueryRunner } from 'typeorm';
// import { CreateBlockedByDto } from './dto/create-blocked-by.dto';
// import { UpdateBlockedByDto } from './dto/update-blocked-by.dto';
/* eslint-disable */

@Injectable()
export class BlockedByService {
    async create(blockedBy, queryRunner: QueryRunner) {
        try {
            const blockedByExisting = await queryRunner.manager.findOneBy(
                BlockedBy,
                { code: blockedBy.code },
            );
            if (blockedByExisting) return blockedByExisting.idblockedBy;

            const dataForBlockedBy = queryRunner.manager.create(BlockedBy, {
                name: blockedBy.name,
                email: blockedBy.email,
                document: blockedBy.document,
                code: blockedBy.code,
            });

            return queryRunner.manager.save(BlockedBy, dataForBlockedBy);
        } catch (error) {
            console.log('Erro ao criar "blockedBy": ' + error);
            throw error;
        }
    }
}
