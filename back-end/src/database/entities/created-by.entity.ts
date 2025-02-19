import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'createdBy' }) // Nome da tabela no banco
export class CreatedBy {
    @PrimaryGeneratedColumn()
    idcreatedBy: number;

    @Column({ length: 100, nullable: true })
    name?: string;

    @Column({ length: 20, nullable: true })
    document?: string;

    @Column({ length: 255, nullable: true })
    email?: string;

    @Column({ length: 2000, nullable: true })
    code?: string;
}
