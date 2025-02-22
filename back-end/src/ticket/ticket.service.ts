import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from 'src/database/entities/ticket.entity';
import { Repository } from 'typeorm';
// import { CreateTicketDto } from './dto/create-ticket.dto';
// import { UpdateTicketDto } from './dto/update-ticket.dto';
/* eslint-disable */

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket)
        private ticketRepository: Repository<Ticket>,
    ) {}

    async create(ticket) {
        const ticketExisting = await this.ticketRepository.findOneBy({
            number: ticket.number,
        });
        if (ticketExisting) return ticketExisting;

        const dataForTicket = this.ticketRepository.create({
            number: ticket.number,
        });
        return this.ticketRepository.save(dataForTicket);
    }
}
