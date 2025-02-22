import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Icms } from 'src/database/entities/icm.entity';
import { Repository } from 'typeorm';
// import { CreateIcmDto } from './dto/create-icm.dto';
// import { UpdateIcmDto } from './dto/update-icm.dto';
/* eslint-disable */

@Injectable()
export class IcmsService {
    constructor(
        @InjectRepository(Icms)
        private readonly icmsRepository: Repository<Icms>,
    ) {}

    async create(icms) {
        const existingIcms = await this.icmsRepository.findOneBy({
            cst: icms.cst,
            aliq: icms.aliq,
        });
        if (existingIcms) return existingIcms;

        const dataForIcms = this.icmsRepository.create({
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

        return this.icmsRepository.save(dataForIcms);
    }
}
