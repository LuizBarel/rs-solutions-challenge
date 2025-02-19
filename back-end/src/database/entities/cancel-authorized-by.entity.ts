import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cancelAuthorizedBy' }) // Nome da tabela no banco
export class CancelAuthorizedBy {
    @PrimaryGeneratedColumn()
    idcancelAuthorizedBy: number;

    @Column({ length: 100, nullable: true })
    name?: string;

    @Column({ length: 15, nullable: true })
    document?: string;

    @Column({ length: 45, nullable: true })
    email?: string;

    @Column({ length: 45, nullable: true })
    code?: string;
}
