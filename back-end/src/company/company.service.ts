import { Injectable } from '@nestjs/common';
import { AddressService } from 'src/address/address.service';
import { Company } from 'src/database/entities/company.entity';
import { QueryRunner } from 'typeorm';
// import { CreateCompanyDto } from './dto/create-company.dto';
// import { UpdateCompanyDto } from './dto/update-company.dto';
/* eslint-disable */

@Injectable()
export class CompanyService {
    constructor(private addressService: AddressService) {}

    async create(company, queryRunner: QueryRunner) {
        try {
            const companyExisting = await queryRunner.manager.findOneBy(
                Company,
                { stringCompany: company.id },
            );
            if (companyExisting) return companyExisting;

            let address;
            if (company.address && company.address.street) {
                address = await this.addressService.create(
                    company.address,
                    queryRunner,
                );
            }

            const dataForCompany = queryRunner.manager.create(Company, {
                stringCompany: company.id,
                name: company.name,
                document: company.document,
                type: company.type,
                legalName: company.legalName,
                address: address,
                crt: company.crt,
                stateRegistration: company.stateRegistration,
            });

            return await queryRunner.manager.save(Company, dataForCompany);
        } catch (error) {
            console.log('Erro ao criar empresa: ' + error);
            throw error;
        }
    }
}
