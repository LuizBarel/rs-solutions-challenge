import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pis {
    @PrimaryGeneratedColumn()
    idpis: number;

    @Column({ length: 45, nullable: true })
    cst?: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    aliq?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    value?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    calculationBasis?: number;
}
