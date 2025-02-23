import { Injectable } from '@nestjs/common';
import { Device } from 'src/database/entities/device.entity';
import { QueryRunner } from 'typeorm';
// import { CreateDeviceDto } from './dto/create-device.dto';
// import { UpdateDeviceDto } from './dto/update-device.dto';
/* eslint-disable */

@Injectable()
export class DeviceService {
    async create(device, queryRunner: QueryRunner) {
        try {
            const deviceExisting = await queryRunner.manager.findOneBy(Device, {
                model: device.model,
                serial: device.serial,
            });
            if (deviceExisting) return deviceExisting;

            const dataForDevice = queryRunner.manager.create(Device, {
                model: device.model,
                serial: device.serial,
            });

            return await queryRunner.manager.save(Device, dataForDevice);
        } catch (error) {
            console.log('Erro ao criar dispositivo: ' + error);
            throw error;
        }
    }
}
