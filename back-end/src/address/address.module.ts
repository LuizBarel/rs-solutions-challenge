import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from 'src/database/entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Address])],
    controllers: [],
    providers: [AddressService],
})
export class AddressModule {}
