import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('icms')
export class Icms {
    @PrimaryGeneratedColumn()
    idicms: number;

    @Column({ length: 45, nullable: true })
    cst?: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    aliq?: number;

    @Column({ length: 45, nullable: true })
    value?: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    calculationBasis?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    effectiveAliq?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    effectiveCalculationBasis?: number;

    @Column({ length: 45, nullable: true })
    effectiveValue?: string;

    @Column({ length: 45, nullable: true })
    effectiveReductionAliq?: string;

    @Column({ length: 45, nullable: true })
    atPurchaseAliq?: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    substituteValue?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    retainedValue?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    retainedCalculationBasis?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    reductionAliq?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    fcpAliq?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    fcpValue?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    taxBenefitCode?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    exemptValue?: number;
}
