import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { CreatedBy } from './created-by.entity';
import { Payments } from './payment.entity';

@Entity({ name: 'transactions' })
export class Transaction {
    @PrimaryGeneratedColumn()
    idtransactions: number;

    @Column({ length: 45 })
    stringTransactions: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
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
    @ManyToOne(() => CreatedBy)
    @JoinColumn({ name: 'createdBy' })
    createdBy: CreatedBy;

    @ManyToOne(() => Payments, { nullable: true })
    @JoinColumn({ name: 'payment' })
    payment?: Payments;

    @Column({ length: 45, nullable: true })
    transactionscol?: string;
}
