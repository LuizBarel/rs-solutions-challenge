import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Address } from './address.entity';
import { Order } from './order.entity';

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    idcompany: number;

    @Column({ length: 255 })
    stringCompany: string;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 255 })
    legalName: string;

    @Column({ length: 25 })
    document: string;

    @Column({ length: 45, nullable: true })
    stateRegistration?: string;

    @Column({ length: 45 })
    type?: string;

    @Column({ length: 45, nullable: true })
    crt?: string;

    @OneToOne(() => Address, (address) => address.company, { nullable: true })
    @JoinColumn()
    address: Address;

    @OneToMany(() => Order, (order) => order.company)
    orders: Order[];
}
