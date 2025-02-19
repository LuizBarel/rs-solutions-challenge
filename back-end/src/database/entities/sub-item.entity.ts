import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Additional } from './additional.entity';
import { TaxInfo } from './tax-info.entity';
import { CreatedBy } from './created-by.entity';
import { CanceledBy } from './canceled-by.entity';
import { CancelAuthorizedBy } from './cancel-authorized-by.entity';

@Entity({ name: 'subItems' }) // Nome da tabela no banco
export class SubItem {
    @PrimaryGeneratedColumn()
    idsubItems: number;

    @Column({ length: 45 })
    stringsubItems: string;

    @Column({ length: 45 })
    sku: string;

    @Column({ length: 45 })
    name: string;

    @Column({ type: 'decimal' })
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    unitPrice: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    discount: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    serviceCharge: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    totalPrice: number;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column({ type: 'timestamp' })
    updateAt: Date;

    @Column({ length: 255, nullable: true })
    picture?: string;

    @Column({ type: 'boolean', nullable: true })
    canceled?: boolean;

    @Column({ type: 'timestamp', nullable: true })
    canceledAt?: Date;

    @Column({ length: 255, nullable: true })
    note?: string;

    @Column({ length: 15, nullable: true })
    comboType?: string;

    @Column({ type: 'timestamp', nullable: true })
    sentToKdsAt?: Date;

    // Relacionamentos
    @ManyToOne(() => Additional, { nullable: true })
    @JoinColumn({ name: 'additionals' })
    additionals?: Additional;

    @ManyToOne(() => TaxInfo, { nullable: true })
    @JoinColumn({ name: 'taxInfo' })
    taxInfo?: TaxInfo;

    @ManyToOne(() => CreatedBy, { nullable: true })
    @JoinColumn({ name: 'createdBy' })
    createdBy?: CreatedBy;

    @ManyToOne(() => CanceledBy, { nullable: true })
    @JoinColumn({ name: 'canceledBy' })
    canceledBy?: CanceledBy;

    @ManyToOne(() => CancelAuthorizedBy, { nullable: true })
    @JoinColumn({ name: 'cancelAuthorizedBy' })
    cancelAuthorizedBy?: CancelAuthorizedBy;
}
