import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Response } from 'src/database/entities/response.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Response])],
    controllers: [],
    providers: [ResponseService],
})
export class ResponseModule {}
