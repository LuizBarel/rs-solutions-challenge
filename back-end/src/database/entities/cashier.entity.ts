import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { SalesChannel } from './sales-channel.entity';
import { Company } from './company.entity';
import { Receipt } from './receipt.entity';
import { CreatedBy } from './created-by.entity';
import { BlockedBy } from './blocked-by.entity';
import { ClosedBy } from './closed-by.entity';
import { Device } from './device.entity';

@Entity({ name: 'cashiers' })
export class Cashier {
    @PrimaryGeneratedColumn()
    idCashiers: number;

    @Column({ length: 45, unique: true })
    stringCashiers: string;

    @Column({ length: 255, nullable: true })
    code: string;

    @Column({ length: 45, nullable: true })
    status: string;

    @Column({ type: 'timestamp', nullable: true })
    createdAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    blockedAt?: Date;

    @Column({ type: 'timestamp', nullable: true })
    closedAt?: Date;

    // Relacionamentos
    @ManyToOne(() => SalesChannel, (salesChannel) => salesChannel.cashiers, {
        nullable: true,
    })
    @JoinColumn({ name: 'salesChannel' })
    salesChannel: SalesChannel;

    @ManyToOne(() => Company, { nullable: true })
    @JoinColumn({ name: 'company' })
    company: Company;

    @ManyToOne(() => Receipt, { nullable: true })
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
