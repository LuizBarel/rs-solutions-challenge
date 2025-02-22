import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/database/entities/customer.entity';
import { Repository } from 'typeorm';
// import { CreateCustomerDto } from './dto/create-customer.dto';
// import { UpdateCustomerDto } from './dto/update-customer.dto';
/* eslint-disable */

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
    ) {}

    async create(customer) {
        const customerExisting = await this.customerRepository.findOneBy({
            email: customer.email,
        });
        if (customerExisting) return customerExisting;

        const dataForCustomer = this.customerRepository.create({
            name: customer.name,
            document: customer.name,
            phoneNumber: customer.phoneNumber,
            email: customer.email,
        });

        return this.customerRepository.save(dataForCustomer);
    }
}
