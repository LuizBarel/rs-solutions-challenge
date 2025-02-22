import { Module } from '@nestjs/common';
import { PisService } from './pis.service';
import { Pis } from 'src/database/entities/pis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Pis])],
    controllers: [],
    providers: [PisService],
    exports: [PisService],
})
export class PisModule {}
