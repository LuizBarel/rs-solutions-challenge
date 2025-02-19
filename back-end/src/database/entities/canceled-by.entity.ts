import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'canceledBy' }) // Nome da tabela no banco
export class CanceledBy {
    @PrimaryGeneratedColumn()
    idcanceledBy: number;

    @Column({ length: 45, nullable: true })
    name?: string;

    @Column({ length: 15, nullable: true })
    document?: string;

    @Column({ length: 255, nullable: true })
    email?: string;

    @Column({ length: 45, nullable: true })
    code?: string;
}
