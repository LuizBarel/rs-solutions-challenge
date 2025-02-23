import { Injectable } from '@nestjs/common';
import { ClosedBy } from 'src/database/entities/closed-by.entity';
import { QueryRunner } from 'typeorm';
// import { CreateClosedByDto } from './dto/create-closed-by.dto';
// import { UpdateClosedByDto } from './dto/update-closed-by.dto';
/* eslint-disable */

@Injectable()
export class ClosedByService {
    async create(closedBy, queryRunner: QueryRunner) {
        try {
            const closedByExisting = await queryRunner.manager.findOneBy(
                ClosedBy,
                { code: closedBy.code },
            );
            if (closedByExisting) return closedByExisting;

            const dataForClosedBy = queryRunner.manager.create(ClosedBy, {
                name: closedBy.name,
                email: closedBy.email,
                document: closedBy.document,
                code: closedBy.code,
            });

            return queryRunner.manager.save(ClosedBy, dataForClosedBy);
        } catch (error) {
            console.log('Erro ao criar "closedBy": ' + error);
            throw error;
        }
    }
}
