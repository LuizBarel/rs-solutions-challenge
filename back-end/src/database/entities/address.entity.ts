import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    idaddress: number;

    @Column({ length: 45 })
    street: string;

    @Column({ length: 45 })
    neighborhood: string;

    @Column({ length: 100 })
    city: string;

    @Column({ length: 45 })
    state: string;

    @Column({ length: 45 })
    postalCode: string;

    @Column({ length: 15, nullable: true })
    number?: string;

    @Column({ length: 45, nullable: true })
    complement?: string;
}
