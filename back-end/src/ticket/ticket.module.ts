import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from 'src/database/entities/ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    controllers: [],
    providers: [TicketService],
})
export class TicketModule {}
