import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pis } from 'src/database/entities/pis.entity';
import { Repository } from 'typeorm';
// import { CreatePiDto } from './dto/create-pi.dto';
// import { UpdatePiDto } from './dto/update-pi.dto';
/* eslint-disable */

@Injectable()
export class PisService {
    constructor(
        @InjectRepository(Pis)
        private pisRepository: Repository<Pis>,
    ) {}

    async create(pis) {
        const pisExisting = await this.pisRepository.findOneBy({
            cst: pis.cst,
            aliq: pis.aliq,
        });
        if (pisExisting) return pisExisting;

        const dataForPis = this.pisRepository.create({
            aliq: pis.aliq,
            calculationBasis: pis.calculationBasis,
            cst: pis.cst,
            value: pis.value,
        });

        return this.pisRepository.save(dataForPis);
    }
}
