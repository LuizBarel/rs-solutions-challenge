import { Injectable } from '@nestjs/common';
import { Table } from 'src/database/entities/table.entity';
import { QueryRunner } from 'typeorm';
// import { CreateTableDto } from './dto/create-table.dto';
// import { UpdateTableDto } from './dto/update-table.dto';
/* eslint-disable */

@Injectable()
export class TableService {
    async create(table, queryRunner: QueryRunner) {
        try {
            const tableExisting = await queryRunner.manager.findOneBy(Table, {
                number: table.number,
                peopleQuantity: table.peopleQuantity,
            });
            if (tableExisting) return tableExisting;

            const dataForTable = queryRunner.manager.create(Table, {
                number: table.number,
                peopleQuantity: table.peopleQuantity,
            });

            return await queryRunner.manager.save(Table, dataForTable);
        } catch (error) {
            console.log('Erro ao criar mesa: ' + error);
            throw error;
        }
    }
}
