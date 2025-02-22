import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from 'src/database/entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from 'src/address/address.module';

@Module({
    imports: [TypeOrmModule.forFeature([Company]), AddressModule],
    controllers: [],
    providers: [CompanyService],
    exports: [CompanyService],
})
export class CompanyModule {}
