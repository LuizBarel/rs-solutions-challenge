import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/database/entities/ticket.entity';
import { QueryRunner } from 'typeorm';
// import { CreateTicketDto } from './dto/create-ticket.dto';
// import { UpdateTicketDto } from './dto/update-ticket.dto';
/* eslint-disable */

@Injectable()
export class TicketService {
    async create(ticket, queryRunner: QueryRunner) {
        try {
            const ticketExisting = await queryRunner.manager.findOneBy(Ticket, {
                number: ticket.number,
            });
            if (ticketExisting) return ticketExisting;

            const dataForTicket = queryRunner.manager.create(Ticket, {
                number: ticket.number,
            });

            return await queryRunner.manager.save(Ticket, dataForTicket);
        } catch (error) {
            console.log('Erro ao criar ticket: ' + error);
            throw error;
        }
    }
}
