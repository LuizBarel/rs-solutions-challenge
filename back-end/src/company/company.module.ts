import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from 'src/database/entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Company])],
    controllers: [],
    providers: [CompanyService],
})
export class CompanyModule {}
