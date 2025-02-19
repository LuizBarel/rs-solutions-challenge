import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'table' }) // Nome da tabela no banco
export class Table {
    @PrimaryGeneratedColumn()
    idtable: number;

    @Column({ length: 15 })
    number: string;

    @Column({ length: 3, nullable: true })
    peopleQuantity?: string;
}
