import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';
@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    idcompany: number;

    @Column({ length: 45 })
    type_company: string;

    @Column({ length: 255 })
    name_company: string;

    @Column({ length: 25 })
    document_company: string;

    @Column({ length: 45, nullable: true })
    legalName_company?: string;

    @OneToMany(() => Order, (order) => order.company)
    orders: Order[];
}
