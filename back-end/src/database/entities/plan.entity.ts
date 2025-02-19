import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    idplan: number;

    @Column({ length: 45 })
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @Column({ length: 100, nullable: true })
    description?: string;
}
