import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressService } from 'src/address/address.service';
import { Company } from 'src/database/entities/company.entity';
import { Repository } from 'typeorm';
// import { CreateCompanyDto } from './dto/create-company.dto';
// import { UpdateCompanyDto } from './dto/update-company.dto';
/* eslint-disable */

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>,
        private addressService: AddressService,
    ) {}

    async create(company) {
        const companyExisting = await this.companyRepository.findOneBy({
            stringCompany: company.id,
        });
        if (companyExisting) {
            return companyExisting.idcompany;
        }

        let address;

        if (company.address && company.address.street) {
            address = await this.addressService.create(company.address);
        }

        const salescompany = this.companyRepository.create({
            stringCompany: company.id,
            name: company.name,
            document: company.document,
            type: company.type,
            legalName: company.legalName,
            address: address,
            crt: company.crt,
            stateRegistration: company.stateRegistration,
        });
        const createdcompany = this.companyRepository.save(salescompany);

        return createdcompany;
    }
}
