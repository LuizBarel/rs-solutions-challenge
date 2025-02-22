import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Card } from './card.entity';
import { Transaction } from './transaction.entity';
import { Order } from './order.entity';

@Entity()
export class Payments {
    @PrimaryGeneratedColumn()
    idpayments: number;

    @Column({ unique: true })
    stringPayments: string;

    @Column({ length: 45 })
    status_payments: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total_payments: number;

    @Column({ length: 45 })
    method_payments: string;

    @Column({ type: 'timestamp', precision: 20 })
    createdAt: Date;

    @Column({ type: 'timestamp', precision: 20 })
    updatedAt: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    changeFor?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    change?: number;

    @ManyToOne(() => Card)
    @JoinColumn({ name: 'card' })
    card?: Card;

    @OneToMany(() => Transaction, (transaction) => transaction.payment)
    transactions?: Transaction[];

    @ManyToOne(() => Order)
    @JoinColumn({ name: 'orderId' })
    order: Order;
}
