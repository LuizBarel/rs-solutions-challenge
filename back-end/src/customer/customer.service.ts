import { Injectable } from '@nestjs/common';
import { Customer } from 'src/database/entities/customer.entity';
import { QueryRunner } from 'typeorm';
// import { CreateCustomerDto } from './dto/create-customer.dto';
// import { UpdateCustomerDto } from './dto/update-customer.dto';
/* eslint-disable */

@Injectable()
export class CustomerService {
    async create(customer, queryRunner: QueryRunner) {
        try {
            const customerExisting = await queryRunner.manager.findOneBy(
                Customer,
                { email: customer.email },
            );
            if (customerExisting) return customerExisting;

            const dataForCustomer = queryRunner.manager.create(Customer, {
                name: customer.name,
                document: customer.name,
                phoneNumber: customer.phoneNumber,
                email: customer.email,
            });

            return await queryRunner.manager.save(Customer, dataForCustomer);
        } catch (error) {
            console.log('Erro ao criar cliente: ' + error);
            throw error;
        }
    }
}
