import { Injectable } from '@nestjs/common';
import { CreatedBy } from 'src/database/entities/created-by.entity';
import { QueryRunner } from 'typeorm';
// import { CreateCreatedByDto } from './dto/create-created-by.dto';
// import { UpdateCreatedByDto } from './dto/update-created-by.dto';
/* eslint-disable */

@Injectable()
export class CreatedByService {
    async create(createdBy, queryRunner: QueryRunner) {
        try {
            const createdByExisting = await this.findOneByCode(
                createdBy.code,
                queryRunner,
            );
            if (createdByExisting) return createdByExisting;

            const dataForCreatedBy = queryRunner.manager.create(CreatedBy, {
                name: createdBy.name,
                email: createdBy.email,
                document: createdBy.document,
                code: createdBy.code,
            });

            return queryRunner.manager.save(CreatedBy, dataForCreatedBy);
        } catch (error) {
            console.log('Erro ao criar "createdBy": ' + error);
            throw error;
        }
    }

    async findOneByCode(code, queryRunner: QueryRunner) {
        const createdBy = await queryRunner.manager.findOneBy(CreatedBy, {
            code,
        });
        return createdBy;
    }
}
