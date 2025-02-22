import { Module } from '@nestjs/common';
import { IcmsService } from './icms.service';
import { Icms } from 'src/database/entities/icm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Icms])],
    controllers: [],
    providers: [IcmsService],
    exports: [IcmsService],
})
export class IcmsModule {}
