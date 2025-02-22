import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { Delivery } from 'src/database/entities/delivery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from 'src/address/address.module';

@Module({
    imports: [TypeOrmModule.forFeature([Delivery]), AddressModule],
    controllers: [],
    providers: [DeliveryService],
    exports: [DeliveryService],
})
export class DeliveryModule {}
