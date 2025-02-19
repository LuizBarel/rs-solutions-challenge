import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { Plan } from 'src/database/entities/plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Plan])],
    controllers: [],
    providers: [PlanService],
})
export class PlanModule {}
