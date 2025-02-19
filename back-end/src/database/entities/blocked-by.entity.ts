import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'blockedBy' }) // Nome da tabela no banco
export class BlockedBy {
    @PrimaryGeneratedColumn()
    idblockedBy: number;

    @Column({ length: 50, nullable: true })
    name?: string;

    @Column({ length: 12, nullable: true })
    document?: string;

    @Column({ length: 255, nullable: true })
    email?: string;

    @Column({ length: 255, nullable: true })
    code?: string;
}
