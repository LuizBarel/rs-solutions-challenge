import { Injectable } from '@nestjs/common';
import { CanceledBy } from 'src/database/entities/canceled-by.entity';
import { QueryRunner } from 'typeorm';
// import { CreateCanceledByDto } from './dto/create-canceled-by.dto';
// import { UpdateCanceledByDto } from './dto/update-canceled-by.dto';
/* eslint-disable */

@Injectable()
export class CanceledByService {
    async create(canceledBy, queryRunner: QueryRunner) {
        try {
            const canceledByExisting = await queryRunner.manager.findOneBy(
                CanceledBy,
                { code: canceledBy.code },
            );
            if (canceledByExisting) return canceledByExisting;

            const dataForCanceledBy = queryRunner.manager.create(CanceledBy, {
                name: canceledBy.name,
                email: canceledBy.email,
                document: canceledBy.document,
                code: canceledBy.code,
            });

            return await queryRunner.manager.save(
                CanceledBy,
                dataForCanceledBy,
            );
        } catch (error) {
            console.log('Erro ao criar "canceledBy": ' + error);
            throw error;
        }
    }
}
