import { Injectable } from '@nestjs/common';
import { Additional } from 'src/database/entities/additional.entity';
import { QueryRunner } from 'typeorm';
// import { CreateAdditionalDto } from './dto/create-additional.dto';
// import { UpdateAdditionalDto } from './dto/update-additional.dto';
/* eslint-disable */

@Injectable()
export class AdditionalsService {
    async create(additional, id, queryRunner: QueryRunner) {
        try {
            const additionalExisting = await queryRunner.manager.findOneBy(
                Additional,
                { stringAdditionals: additional.id },
            );
            if (additionalExisting) return additionalExisting.idadditionals;

            const dataForAdditional = queryRunner.manager.create(Additional, {
                stringAdditionals: additional.id,
                name: additional.name,
                qntd: additional.quantity,
                removable: additional.removable,
                unitPrice: additional.unitPrice,
                totalPrice: additional.totalPrice,
                item: id,
            });

            return await queryRunner.manager.save(
                Additional,
                dataForAdditional,
            );
        } catch (error) {
            console.log('Erro ao criar adicional: ' + error);
            throw error;
        }
    }
}
