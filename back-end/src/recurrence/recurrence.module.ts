import { Module } from '@nestjs/common';
import { RecurrenceService } from './recurrence.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recurrence } from 'src/database/entities/recurrence.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Recurrence])],
    controllers: [],
    providers: [RecurrenceService],
})
export class RecurrenceModule {}
