import { Injectable } from '@nestjs/common';
import { Address } from 'src/database/entities/address.entity';
import { QueryRunner } from 'typeorm';
// import { CreateAddressDto } from './dto/create-address.dto';
// import { UpdateAddressDto } from './dto/update-address.dto';
/* eslint-disable */

@Injectable()
export class AddressService {
    async create(address, queryRunner: QueryRunner, id?) {
        try {
            const addressExisting = await queryRunner.manager.findOneBy(
                Address,
                {
                    city: address.city,
                    neighborhood: address.neighborhood,
                    street: address.street,
                    number: address.number,
                },
            );
            if (addressExisting) return addressExisting;

            const dataForAddress = queryRunner.manager.create(Address, {
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

            return await queryRunner.manager.save(Address, dataForAddress);
        } catch (error) {
            console.log('Erro ao criar endereço: ' + error);
            throw error;
        }
    }
}
