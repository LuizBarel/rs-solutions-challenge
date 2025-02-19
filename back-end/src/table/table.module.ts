import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from 'src/database/entities/table.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Table])],
    controllers: [],
    providers: [TableService],
})
export class TableModule {}
