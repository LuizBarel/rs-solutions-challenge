import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'receipts' })
export class Receipt {
    @PrimaryGeneratedColumn()
    idreceipts: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    pix: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    cash: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    card: number;
}
