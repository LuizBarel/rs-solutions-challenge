import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { SalesChannel } from './sales-channel.entity';
import { Company } from './company.entity';
import { Transaction } from './transaction.entity';
import { Receipt } from './receipt.entity';
import { CreatedBy } from './created-by.entity';
import { BlockedBy } from './blocked-by.entity';
import { ClosedBy } from './closed-by.entity';
import { Device } from './device.entity';

@Entity({ name: 'cashiers' })
export class Cashier {
    @PrimaryGeneratedColumn()
    idCashiers: number;

    @Column({ length: 45 })
    stringCashiers: string;

    @Column({ length: 255 })
    code: string;

    @Column({ length: 45 })
    status: string;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    blockedAt?: Date;

    @Column({ type: 'timestamp', nullable: true })
    closedAt?: Date;

    // Relacionamentos
    @ManyToOne(() => SalesChannel, (salesChannel) => salesChannel.cashiers)
    @JoinColumn({ name: 'salesChannel' })
    salesChannel: SalesChannel;

    @ManyToOne(() => Company)
    @JoinColumn({ name: 'company' })
    company: Company;

    @ManyToOne(() => Transaction)
    @JoinColumn({ name: 'transactions' })
    transactions: Transaction;

    @ManyToOne(() => Receipt)
    @JoinColumn({ name: 'receipts' })
    receipts: Receipt;

    @ManyToOne(() => CreatedBy, { nullable: true })
    @JoinColumn({ name: 'createdBy' })
    createdBy?: CreatedBy;

    @ManyToOne(() => BlockedBy, { nullable: true })
    @JoinColumn({ name: 'blockedBy' })
    blockedBy?: BlockedBy;

    @ManyToOne(() => ClosedBy, { nullable: true })
    @JoinColumn({ name: 'closedBy' })
    closedBy?: ClosedBy;

    @ManyToOne(() => Device, { nullable: true })
    @JoinColumn({ name: 'device' })
    device?: Device;
}
