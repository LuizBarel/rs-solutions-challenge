import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from 'src/database/entities/table.entity';
import { Repository } from 'typeorm';
// import { CreateTableDto } from './dto/create-table.dto';
// import { UpdateTableDto } from './dto/update-table.dto';
/* eslint-disable */

@Injectable()
export class TableService {
    constructor(
        @InjectRepository(Table)
        private tableRepository: Repository<Table>,
    ) {}

    async create(table) {
        const tableExisting = await this.tableRepository.findOneBy({
            number: table.number,
            peopleQuantity: table.peopleQuantity,
        });
        if (tableExisting) return tableExisting;

        const dataForTable = this.tableRepository.create({
            number: table.number,
            peopleQuantity: table.peopleQuantity,
        });
        return this.tableRepository.save(dataForTable);
    }
}
