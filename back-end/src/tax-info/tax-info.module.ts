import { Module } from '@nestjs/common';
import { TaxInfoService } from './tax-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxInfo } from 'src/database/entities/tax-info.entity';
import { IcmsModule } from 'src/icms/icms.module';
import { CofinsModule } from 'src/cofins/cofins.module';
import { PisModule } from 'src/pis/pis.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([TaxInfo]),
        IcmsModule,
        CofinsModule,
        PisModule,
    ],
    controllers: [],
    providers: [TaxInfoService],
    exports: [TaxInfoService],
})
export class TaxInfoModule {}
