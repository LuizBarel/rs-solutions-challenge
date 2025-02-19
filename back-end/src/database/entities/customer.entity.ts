import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';
@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    idcustomer: number;

    @Column({ length: 45, nullable: true })
    name?: string;

    @Column({ length: 45, nullable: true })
    document?: string;

    @Column({ length: 45, nullable: true })
    phoneNumber?: string;

    @Column({ length: 45, nullable: true })
    email?: string;

    @OneToMany(() => Order, (order) => order.customer)
    orders: Order[];
}
