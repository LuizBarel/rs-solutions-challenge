import { Injectable } from '@nestjs/common';
import { AddressService } from 'src/address/address.service';
import { Delivery } from 'src/database/entities/delivery.entity';
import { QueryRunner } from 'typeorm';
// import { CreateDeliveryDto } from './dto/create-delivery.dto';
// import { UpdateDeliveryDto } from './dto/update-delivery.dto';
/* eslint-disable */

@Injectable()
export class DeliveryService {
    constructor(private addressService: AddressService) {}

    async create(delivery, queryRunner: QueryRunner) {
        try {
            const deliveryExisting = await queryRunner.manager.findOneBy(
                Delivery,
                {
                    address: delivery.address,
                    method: delivery.method,
                    total: delivery.total,
                },
            );
            if (deliveryExisting) return deliveryExisting;

            let address;
            if (delivery.address && delivery.address.street) {
                address = await this.addressService.create(
                    delivery.address,
                    queryRunner,
                );
            }

            const dataForDelivery = queryRunner.manager.create(Delivery, {
                method: delivery.method,
                total: delivery.total,
                address: address,
            });

            return await queryRunner.manager.save(Delivery, dataForDelivery);
        } catch (error) {
            console.log('Erro ao criar delivery: ' + error);
            throw error;
        }
    }
}
