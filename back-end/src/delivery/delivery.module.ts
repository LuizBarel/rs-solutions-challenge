import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { Delivery } from 'src/database/entities/delivery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Delivery])],
    controllers: [],
    providers: [DeliveryService],
})
export class DeliveryModule {}
