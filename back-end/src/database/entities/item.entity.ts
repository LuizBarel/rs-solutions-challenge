import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { CreatedBy } from './created-by.entity';
import { CanceledBy } from './canceled-by.entity';
import { CancelAuthorizedBy } from './cancel-authorized-by.entity';
import { TaxInfo } from './tax-info.entity';
import { Additional } from './additional.entity';
import { Order } from './order.entity';

@Entity('items') // Nome da tabela no banco
export class Item {
    @PrimaryGeneratedColumn()
    iditems: number;

    @Column({ length: 45 })
    sku_items: string;

    @Column({ length: 45 })
    name_items: string;

    @Column()
    quantity_items: number;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    unitPrice_items: number;

    @Column({ length: 45 })
    discount_items: string;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    serviceCharge: number;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    totalPrice_items: number;

    @Column({ type: 'timestamp', precision: 15, name: 'createdBy' }) // Campo DATETIME do banco
    createdAt: Date;

    @Column({ length: 15 })
    updateBy: string;

    @Column({ length: 255, nullable: true })
    picture_items?: string;

    @Column({ type: 'boolean', nullable: true })
    canceled?: boolean;

    @Column({ type: 'timestamp', precision: 15, nullable: true })
    canceledAt?: Date;

    @Column({ length: 45, nullable: true })
    note_items?: string;

    @Column({ type: 'timestamp', precision: 15, nullable: true })
    sentTokdsAt?: Date;

    @Column({ length: 45, nullable: true })
    comboType?: string;

    // Relacionamentos
    @ManyToOne(() => Additional, { nullable: true })
    @JoinColumn({ name: 'additional' })
    additionals?: Additional;

    @ManyToOne(() => TaxInfo, { nullable: true })
    @JoinColumn({ name: 'taxInfo' })
    taxInfo?: TaxInfo;

    @ManyToOne(() => CreatedBy, { nullable: true })
    @JoinColumn({ name: 'createdByUser' }) // Supondo que há uma FK separada para o usuário
    createdByUser?: CreatedBy;

    @ManyToOne(() => CanceledBy, { nullable: true })
    @JoinColumn({ name: 'canceledBy' })
    canceledBy?: CanceledBy;

    @ManyToOne(() => CancelAuthorizedBy, { nullable: true })
    @JoinColumn({ name: 'cancelAuthorizedBy' })
    cancelAuthorizedBy?: CancelAuthorizedBy;

    @OneToMany(() => Order, (order) => order.items)
    orders: Order[];
}
