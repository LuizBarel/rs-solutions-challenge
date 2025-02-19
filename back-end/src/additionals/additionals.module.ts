import { Module } from '@nestjs/common';
import { AdditionalsService } from './additionals.service';
import { Additional } from 'src/database/entities/additional.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Additional])],
    controllers: [],
    providers: [AdditionalsService],
})
export class AdditionalsModule {}
