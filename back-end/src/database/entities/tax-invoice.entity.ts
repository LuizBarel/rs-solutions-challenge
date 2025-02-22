import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tax-invoices' })
export class TaxInvoice {
    @PrimaryGeneratedColumn()
    idtax_invoice: number;

    @Column({ length: 45, unique: true })
    stringTaxInvoice: string;

    @Column()
    number: number;

    @Column()
    xml: string;

    @Column({ length: 25 })
    status: string;

    @Column()
    serialNumber: string;

    @Column()
    accessKey: string;

    @Column()
    url: string;

    @Column({ type: 'timestamp' })
    createdAt: Date;
}
