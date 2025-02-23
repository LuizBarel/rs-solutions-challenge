import { Injectable } from '@nestjs/common';
import { Icms } from 'src/database/entities/icm.entity';
import { QueryRunner } from 'typeorm';
// import { CreateIcmDto } from './dto/create-icm.dto';
// import { UpdateIcmDto } from './dto/update-icm.dto';
/* eslint-disable */

@Injectable()
export class IcmsService {
    async create(icms, queryRunner: QueryRunner) {
        try {
            const existingIcms = await queryRunner.manager.findOneBy(Icms, {
                cst: icms.cst,
                aliq: icms.aliq,
            });
            if (existingIcms) return existingIcms;

            const dataForIcms = queryRunner.manager.create(Icms, {
                cst: icms.cst,
                aliq: icms.aliq,
                value: icms.value,
                calculationBasis: icms.calculationBasis,
                effectiveAliq: icms.effectiveAliq,
                effectiveCalculationBasis: icms.effectiveCalculationBasis,
                effectiveValue: icms.effectiveValue,
                effectiveReductionAliq: icms.effectiveReductionAliq,
                stPurchaseAliq: icms.stPurchaseAliq,
                substituteValue: icms.substituteValue,
                retainedValue: icms.retainedValue,
                retainedCalculationBasis: icms.retainedCalculationBasis,
                reductionAliq: icms.reductionAliq,
                fcpAliq: icms.fcpAliq,
                fcpValue: icms.fcpValue,
                taxBenefitCode: icms.taxBenefitCode,
                exemptValue: icms.exemptValue,
            });

            return await queryRunner.manager.save(Icms, dataForIcms);
        } catch (error) {
            console.log('Erro ao criar ICMS: ' + error);
            throw error;
        }
    }
}
