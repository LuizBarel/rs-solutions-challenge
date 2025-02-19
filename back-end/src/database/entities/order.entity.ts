import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { SalesChannel } from './sales-channel.entity';
import { Company } from './company.entity';
import { Item } from './item.entity';
import { Payments } from './payment.entity';
import { Customer } from './customer.entity';
import { Delivery } from './delivery.entity';
import { Table } from './table.entity';
import { Ticket } from './ticket.entity';
import { Cashier } from './cashier.entity';
import { TaxInvoice } from './tax-invoice.entity';
import { CreatedBy } from './created-by.entity';
import { CanceledBy } from './canceled-by.entity';
import { CancelAuthorizedBy } from './cancel-authorized-by.entity'; // Ajuste os imports conforme sua estrutura

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    idOrders: number;

    @Column({ length: 45 })
    stringOrder: string;

    @Column({ type: 'timestamp', precision: 13 })
    initialUpdateAt: Date;

    @Column({ type: 'timestamp', precision: 13 })
    finalUpdatedAt: Date;

    @Column({ length: 45 })
    status: string;

    @Column({ length: 45 })
    type: string;

    @Column({ length: 45 })
    code: string;

    @Column({ type: 'timestamp', precision: 15 })
    createdAt: Date;

    @Column({ type: 'timestamp', precision: 15 })
    updatedAt: Date;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    discount: number;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    serviceCharge: number;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    subtotal: number;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    total: number;

    @Column({ length: 200, nullable: true })
    note?: string;

    @Column({ length: 45, nullable: true })
    appVersion?: string;

    @Column({ length: 20, nullable: true })
    consumingMode?: string;

    @Column({ length: 45, nullable: true })
    responseOrigin?: string;

    @Column({ type: 'json', nullable: true })
    responseOriginJson?: Record<string, any>; // Nome ajustado para evitar conflito

    // Relacionamentos ManyToOne
    @ManyToOne(() => SalesChannel, (salesChannel) => salesChannel.orders)
    @JoinColumn({ name: 'salesChannel' })
    salesChannel: SalesChannel;

    @ManyToOne(() => Company, (company) => company.orders)
    @JoinColumn({ name: 'company' })
    company: Company;

    @ManyToOne(() => Item, (item) => item.orders)
    @JoinColumn({ name: 'items' })
    items: Item;

    @ManyToOne(() => Cashier)
    @JoinColumn({ name: 'cashiers' })
    cashiers: Cashier;

    @ManyToOne(() => Payments, { nullable: true })
    @JoinColumn({ name: 'payments' })
    payments?: Payments;

    @ManyToOne(() => Customer, (customer) => customer.orders)
    @JoinColumn({ name: 'customer' })
    customer: Customer;

    @ManyToOne(() => TaxInvoice, { nullable: true })
    @JoinColumn({ name: 'taxInvoice' })
    taxInvoice?: TaxInvoice;

    @ManyToOne(() => Delivery, { nullable: true })
    @JoinColumn({ name: 'delivery' })
    delivery?: Delivery;

    @ManyToOne(() => Table, { nullable: true })
    @JoinColumn({ name: 'table' })
    table?: Table;

    @ManyToOne(() => Ticket, { nullable: true })
    @JoinColumn({ name: 'ticket' })
    ticket?: Ticket;

    @ManyToOne(() => CreatedBy, { nullable: true })
    @JoinColumn({ name: 'createdBy' })
    createdBy?: CreatedBy;

    @ManyToOne(() => CanceledBy, { nullable: true })
    @JoinColumn({ name: 'canceledBy' })
    canceledBy?: CanceledBy;

    @ManyToOne(() => CancelAuthorizedBy, { nullable: true })
    @JoinColumn({ name: 'cancelAuthorizedBy' })
    cancelAuthorizedBy?: CancelAuthorizedBy;

    @Column({ type: 'timestamp', nullable: true })
    canceledAt?: Date;

    @Column({ nullable: true })
    additionals?: number; // FK para a tabela additionals (ajuste o tipo e relacionamento se necessário)

    @Column({ nullable: true })
    taxInfo?: number; // FK para a tabela taxInfo (ajuste o tipo e relacionamento se necessário)
}
