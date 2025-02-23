import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Company } from './company.entity';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    idaddress: number;

    @Column({ length: 255 })
    street: string;

    @Column({ length: 255 })
    neighborhood: string;

    @Column({ length: 100, nullable: true })
    city: string;

    @Column({ length: 100, nullable: true })
    cityIbge?: string;

    @Column({ length: 2, nullable: true })
    stateAbbreviation?: string;

    @Column({ nullable: true })
    state?: string;

    @Column({ length: 10 })
    postalCode: string;

    @Column({ length: 15, nullable: true })
    number?: string;

    @Column({ length: 45, nullable: true })
    complement?: string;

    @Column({ length: 255, nullable: true })
    country: string;

    @OneToOne(() => Company, (company) => company.address)
    company?: Company;
}
