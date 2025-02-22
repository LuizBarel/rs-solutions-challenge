import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from 'src/database/entities/device.entity';
import { Repository } from 'typeorm';
// import { CreateDeviceDto } from './dto/create-device.dto';
// import { UpdateDeviceDto } from './dto/update-device.dto';
/* eslint-disable */

@Injectable()
export class DeviceService {
    constructor(
        @InjectRepository(Device)
        private deviceRepository: Repository<Device>,
    ) {}

    async create(device) {
        const deviceExisting = await this.deviceRepository.findOneBy({
            model: device.model,
            serial: device.serial,
        });
        if (deviceExisting) return deviceExisting.iddevice;

        const dataForDevice = this.deviceRepository.create({
            model: device.model,
            serial: device.serial,
        });

        return this.deviceRepository.save(dataForDevice);
    }
}
