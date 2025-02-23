import { Injectable } from '@nestjs/common';
import { SalesChannel } from 'src/database/entities/sales-channel.entity';
import { QueryRunner } from 'typeorm';
// import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
// import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
/* eslint-disable */

@Injectable()
export class SalesChannelService {
    async create(channel, queryRunner: QueryRunner) {
        try {
            const channelExisting = await queryRunner.manager.findOneBy(
                SalesChannel,
                { code_salesChannel: channel.code },
            );
            if (channelExisting) return channelExisting.idsalesChannel;

            const salesChannel = queryRunner.manager.create(SalesChannel, {
                tag_salesChannel: channel.tag,
                name_salesChannel: channel.name,
                code_salesChannel: channel.code,
            });

            return await queryRunner.manager.save(salesChannel);
        } catch (error) {
            console.log('Erro ao criar canal de venda: ' + error);
            throw error;
        }
    }
}
