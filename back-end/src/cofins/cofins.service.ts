import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cofins } from 'src/database/entities/cofin.entity';
import { Repository } from 'typeorm';
// import { CreateCofinDto } from './dto/create-cofin.dto';
// import { UpdateCofinDto } from './dto/update-cofin.dto';
/* eslint-disable */

@Injectable()
export class CofinsService {
    constructor(
        @InjectRepository(Cofins)
        private readonly cofinsRepository: Repository<Cofins>,
    ) {}

    async create(cofins) {
        const existingCofins = await this.cofinsRepository.findOneBy({
            cst: cofins.cst,
            aliq: cofins.aliq,
        });
        if (existingCofins) return existingCofins;

        const dataForIcms = this.cofinsRepository.create({
            aliq: cofins.aliq,
            cst: cofins.cst,
            value: cofins.value,
            calculationBasis: cofins.calculationBasis,
        });

        return this.cofinsRepository.save(dataForIcms);
    }
}
