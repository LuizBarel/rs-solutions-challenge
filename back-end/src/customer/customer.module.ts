import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from 'src/database/entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    controllers: [],
    providers: [CustomerService],
})
export class CustomerModule {}
