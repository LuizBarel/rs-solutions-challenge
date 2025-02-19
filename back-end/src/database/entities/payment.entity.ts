import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Card } from './card.entity';

@Entity()
export class Payments {
    @PrimaryGeneratedColumn()
    idpayments: number;

    @Column({ length: 45 })
    status_payments: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total_cashier: number;

    @Column({ length: 45 })
    method_cashier: string;

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
}
