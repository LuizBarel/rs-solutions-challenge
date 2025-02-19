import { Module } from '@nestjs/common';
import { ClosedByService } from './closed-by.service';
import { ClosedBy } from 'src/database/entities/closed-by.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ClosedBy])],
    controllers: [],
    providers: [ClosedByService],
})
export class ClosedByModule {}
