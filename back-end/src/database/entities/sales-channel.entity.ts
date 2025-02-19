import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { Cashier } from './cashier.entity';
@Entity()
export class SalesChannel {
    @PrimaryGeneratedColumn()
    idsalesChannel: number;

    @Column({ length: 45 })
    tag_salesChannel: string;

    @Column({ length: 45 })
    name_salesChannel: string;

    @Column({ length: 45 })
    code_salesChannel: string;

    @OneToMany(() => Order, (order) => order.salesChannel) // Relacionamento OneToMany
    orders: Order[];

    @OneToMany(() => Cashier, (cashier) => cashier.salesChannel)
    cashiers: Cashier[];
}
