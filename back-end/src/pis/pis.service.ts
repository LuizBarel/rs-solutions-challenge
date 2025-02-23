import { Injectable } from '@nestjs/common';
import { Pis } from 'src/database/entities/pis.entity';
import { QueryRunner } from 'typeorm';
// import { CreatePiDto } from './dto/create-pi.dto';
// import { UpdatePiDto } from './dto/update-pi.dto';
/* eslint-disable */

@Injectable()
export class PisService {
    async create(pis, queryRunner: QueryRunner) {
        try {
            const pisExisting = await queryRunner.manager.findOneBy(Pis, {
                cst: pis.cst,
                aliq: pis.aliq,
            });
            if (pisExisting) return pisExisting;

            const dataForPis = queryRunner.manager.create(Pis, {
                aliq: pis.aliq,
                calculationBasis: pis.calculationBasis,
                cst: pis.cst,
                value: pis.value,
            });

            return await queryRunner.manager.save(Pis, dataForPis);
        } catch (error) {
            console.log('Erro ao criar PIS: ' + error);
            throw error;
        }
    }
}
