import { Injectable } from '@nestjs/common';
import { CancelAuthorizedBy } from 'src/database/entities/cancel-authorized-by.entity';
import { QueryRunner } from 'typeorm';
// import { CreateCancelAuthorizedByDto } from './dto/create-cancel-authorized-by.dto';
// import { UpdateCancelAuthorizedByDto } from './dto/update-cancel-authorized-by.dto';
/* eslint-disable */

@Injectable()
export class CancelAuthorizedByService {
    async create(cancelAuthorizedBy, queryRunner: QueryRunner) {
        try {
            const cancelAuthorizedByExisting =
                await queryRunner.manager.findOneBy(CancelAuthorizedBy, {
                    code: cancelAuthorizedBy.code,
                });
            if (cancelAuthorizedByExisting) return cancelAuthorizedByExisting;

            const dataForCancelAuthorizedBy = queryRunner.manager.create(
                CancelAuthorizedBy,
                {
                    name: cancelAuthorizedBy.name,
                    email: cancelAuthorizedBy.email,
                    document: cancelAuthorizedBy.document,
                    code: cancelAuthorizedBy.code,
                },
            );

            return await queryRunner.manager.save(
                CancelAuthorizedBy,
                dataForCancelAuthorizedBy,
            );
        } catch (error) {
            console.log('Erro ao criar "cancelAuthorizedBy": ' + error);
            throw error;
        }
    }
}
