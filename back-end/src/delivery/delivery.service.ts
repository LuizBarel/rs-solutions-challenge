import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressService } from 'src/address/address.service';
import { Delivery } from 'src/database/entities/delivery.entity';
import { Repository } from 'typeorm';
// import { CreateDeliveryDto } from './dto/create-delivery.dto';
// import { UpdateDeliveryDto } from './dto/update-delivery.dto';
/* eslint-disable */

@Injectable()
export class DeliveryService {
    constructor(
        @InjectRepository(Delivery)
        private deliveryRepository: Repository<Delivery>,
        private addressService: AddressService,
    ) {}

    async create(delivery) {
        const deliveryExisting = await this.deliveryRepository.findOneBy({
            address: delivery.address,
            method: delivery.method,
            total: delivery.total,
        });
        if (deliveryExisting) return deliveryExisting;

        let address;
        if (delivery.address && delivery.address.street) {
            address = await this.addressService.create(delivery.address);
        }

        const dataForDelivery = this.deliveryRepository.create({
            method: delivery.method,
            total: delivery.total,
            address: address,
        });

        return this.deliveryRepository.save(dataForDelivery);
    }
}
