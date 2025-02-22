import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CofinsService } from 'src/cofins/cofins.service';
import { TaxInfo } from 'src/database/entities/tax-info.entity';
import { IcmsService } from 'src/icms/icms.service';
import { PisService } from 'src/pis/pis.service';
import { Repository } from 'typeorm';
// import { CreateTaxInfoDto } from './dto/create-tax-info.dto';
// import { UpdateTaxInfoDto } from './dto/update-tax-info.dto';
/* eslint-disable */

@Injectable()
export class TaxInfoService {
    constructor(
        @InjectRepository(TaxInfo)
        private taxInfoRepository: Repository<TaxInfo>,
        private icmsService: IcmsService,
        private cofinsService: CofinsService,
        private pisService: PisService,
    ) {}

    async create(taxInfo) {
        const taxInfoExisting = await this.taxInfoRepository.findOneBy({
            cest: taxInfo.cest,
            cfop: taxInfo.cfop,
            ncm: taxInfo.ncm,
        });
        if (taxInfoExisting) return taxInfoExisting;

        let icms, cofins, pis;
        if (taxInfo.icms) icms = await this.icmsService.create(taxInfo.icms);
        if (taxInfo.cofins)
            cofins = await this.cofinsService.create(taxInfo.cofins);
        if (taxInfo.pis) pis = await this.pisService.create(taxInfo.pis);
        const dataForTaxInfo = this.taxInfoRepository.create({
            cfop: taxInfo.cfog,
            cest: taxInfo.cest,
            gtin: taxInfo.gtin,
            ncm: taxInfo.ncm,
            origin: taxInfo.origin,
            unityType: taxInfo.unityType,
            icms: icms,
            cofins: cofins,
            pis: pis,
        });

        return this.taxInfoRepository.save(dataForTaxInfo);
    }
}
