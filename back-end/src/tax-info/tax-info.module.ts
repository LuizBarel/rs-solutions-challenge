import { Module } from '@nestjs/common';
import { TaxInfoService } from './tax-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxInfo } from 'src/database/entities/tax-info.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TaxInfo])],
    controllers: [],
    providers: [TaxInfoService],
})
export class TaxInfoModule {}
