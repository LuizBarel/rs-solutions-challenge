import { Injectable } from '@nestjs/common';
import { CofinsService } from 'src/cofins/cofins.service';
import { TaxInfo } from 'src/database/entities/tax-info.entity';
import { IcmsService } from 'src/icms/icms.service';
import { PisService } from 'src/pis/pis.service';
import { QueryRunner } from 'typeorm';
// import { CreateTaxInfoDto } from './dto/create-tax-info.dto';
// import { UpdateTaxInfoDto } from './dto/update-tax-info.dto';
/* eslint-disable */

@Injectable()
export class TaxInfoService {
    constructor(
        private icmsService: IcmsService,
        private cofinsService: CofinsService,
        private pisService: PisService,
    ) {}

    async create(taxInfo, queryRunner: QueryRunner) {
        try {
            const taxInfoExisting = await queryRunner.manager.findOneBy(
                TaxInfo,
                {
                    cest: taxInfo.cest,
                    cfop: taxInfo.cfop,
                    ncm: taxInfo.ncm,
                },
            );
            if (taxInfoExisting) return taxInfoExisting;

            let icms, cofins, pis;
            if (taxInfo.icms)
                icms = await this.icmsService.create(taxInfo.icms, queryRunner);
            if (taxInfo.cofins)
                cofins = await this.cofinsService.create(
                    taxInfo.cofins,
                    queryRunner,
                );
            if (taxInfo.pis)
                pis = await this.pisService.create(taxInfo.pis, queryRunner);

            const dataForTaxInfo = queryRunner.manager.create(TaxInfo, {
                cfop: taxInfo.cfop,
                cest: taxInfo.cest,
                gtin: taxInfo.gtin,
                ncm: taxInfo.ncm,
                origin: taxInfo.origin,
                unityType: taxInfo.unityType,
                icms: icms,
                cofins: cofins,
                pis: pis,
            });

            return await queryRunner.manager.save(TaxInfo, dataForTaxInfo);
        } catch (error) {
            console.log('Erro ao criar informação de taxa: ' + error);
            throw error;
        }
    }
}
