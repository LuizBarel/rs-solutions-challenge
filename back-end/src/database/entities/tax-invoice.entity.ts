import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tax-invoices' }) // Tabela com hífen
export class TaxInvoice {
    @PrimaryGeneratedColumn()
    idtax_invoice: number;

    @Column({ length: 45 })
    stringTaxInvoice: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @Column({ length: 25 })
    status: string;

    @Column({ length: 35 })
    paymentMethod: string;

    @Column({ type: 'timestamp' })
    date: Date;

    @Column({ type: 'timestamp', nullable: true })
    approveAt?: Date;

    @Column({ type: 'timestamp', nullable: true })
    canceledAt?: Date;

    @Column({ length: 500, nullable: true })
    cancelReason?: string;
}
