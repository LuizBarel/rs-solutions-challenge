import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { Device } from 'src/database/entities/device.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Device])],
    controllers: [],
    providers: [DeviceService],
    exports: [DeviceService],
})
export class DeviceModule {}
