import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Additional } from 'src/database/entities/additional.entity';
import { Repository } from 'typeorm';
// import { CreateAdditionalDto } from './dto/create-additional.dto';
// import { UpdateAdditionalDto } from './dto/update-additional.dto';
/* eslint-disable */

@Injectable()
export class AdditionalsService {
    constructor(
        @InjectRepository(Additional)
        private additionalRepository: Repository<Additional>,
    ) {}

    async create(additional, id) {
        const additionalExisting = await this.additionalRepository.findOneBy({
            stringAdditionals: additional.id,
        });
        if (additionalExisting) return additionalExisting.idadditionals;

        const dataForAdditional = this.additionalRepository.create({
            stringAdditionals: additional.id,
            name: additional.name,
            qntd: additional.quantity,
            removable: additional.removable,
            unitPrice: additional.unitPrice,
            totalPrice: additional.totalPrice,
            item: id,
        });

        return this.additionalRepository.save(dataForAdditional);
    }
}
