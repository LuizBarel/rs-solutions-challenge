import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesChannel } from 'src/database/entities/sales-channel.entity';
import { Repository } from 'typeorm';
// import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
// import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
/* eslint-disable */

@Injectable()
export class SalesChannelService {
    constructor(
        @InjectRepository(SalesChannel)
        private salesChannelRepository: Repository<SalesChannel>,
    ) {}

    async create(channel) {
        const channelExisting = await this.salesChannelRepository.findOneBy({
            code_salesChannel: channel.code,
        });
        if (channelExisting) {
            return channelExisting.idsalesChannel;
        }

        const salesChannel = this.salesChannelRepository.create({
            tag_salesChannel: channel.tag,
            name_salesChannel: channel.name,
            code_salesChannel: channel.code,
        });
        const createdChannel = this.salesChannelRepository.save(salesChannel);

        return createdChannel;
    }
}
