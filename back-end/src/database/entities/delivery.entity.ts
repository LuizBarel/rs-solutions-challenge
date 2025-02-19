import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class Delivery {
    @PrimaryGeneratedColumn()
    iddelivery: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @Column({ length: 45 })
    method: string;

    @ManyToOne(() => Address)
    @JoinColumn({ name: 'address' })
    address?: Address;
}
