import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tickets' })
export class Ticket {
    @PrimaryGeneratedColumn()
    idticket: number;

    @Column({ length: 6 })
    number: string;
}
