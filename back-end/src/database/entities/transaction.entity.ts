import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { CreatedBy } from './created-by.entity';
import { Payments } from './payment.entity';
import { Cashier } from './cashier.entity';

@Entity({ name: 'transactions' })
export class Transaction {
    @PrimaryGeneratedColumn()
    idtransactions: number;

    @Column({ unique: true })
    stringTransactions: string;

    @Column({ type: 'decimal', precision: 25, scale: 2 })
    total: number;

    @Column({ length: 45 })
    type: string;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column({ length: 45 })
    updatedAt: string;

    @Column({ length: 200, nullable: true })
    note?: string;

    // Relacionamentos
    @ManyToOne(() => Cashier)
    @JoinColumn({ name: 'cashier' })
    cashier: Cashier;

    @ManyToOne(() => CreatedBy, { nullable: true })
    @JoinColumn({ name: 'createdBy' })
    createdBy: CreatedBy;

    @ManyToOne(() => Payments, (payment) => payment.transactions, {
        nullable: true,
    })
    @JoinColumn({ name: 'payment' })
    payment?: Payments;
}
