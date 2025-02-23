import { Injectable } from '@nestjs/common';
import { Cofins } from 'src/database/entities/cofin.entity';
import { QueryRunner } from 'typeorm';
// import { CreateCofinDto } from './dto/create-cofin.dto';
// import { UpdateCofinDto } from './dto/update-cofin.dto';
/* eslint-disable */

@Injectable()
export class CofinsService {
    async create(cofins, queryRunner: QueryRunner) {
        try {
            const existingCofins = await queryRunner.manager.findOneBy(Cofins, {
                cst: cofins.cst,
                aliq: cofins.aliq,
            });
            if (existingCofins) return existingCofins;

            const dataForCofins = queryRunner.manager.create(Cofins, {
                aliq: cofins.aliq,
                cst: cofins.cst,
                value: cofins.value,
                calculationBasis: cofins.calculationBasis,
            });

            return await queryRunner.manager.save(Cofins, dataForCofins);
        } catch (error) {
            console.log('Erro ao criar cofins: ' + error);
            throw error;
        }
    }
}
