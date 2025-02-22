import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/database/entities/address.entity';
import { Repository } from 'typeorm';
// import { CreateAddressDto } from './dto/create-address.dto';
// import { UpdateAddressDto } from './dto/update-address.dto';
/* eslint-disable */

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private addressRepository: Repository<Address>,
    ) {}

    async create(address, id?) {
        const addressExisting = await this.addressRepository.findOneBy({
            city: address.city,
            neighborhood: address.neighborhood,
            street: address.street,
            number: address.number,
        });
        if (addressExisting) addressExisting;

        const dataForAddress = this.addressRepository.create({
            city: address.city,
            cityIbge: address.cityIbge,
            complement: address.complement,
            neighborhood: address.neighborhood,
            number: address.number,
            postalCode: address.postalCode,
            stateAbbreviation: address.stateAbbreviation,
            state: address.state,
            street: address.street,
            country: address.country,
            company: id,
        });

        return this.addressRepository.save(dataForAddress);
    }
}
