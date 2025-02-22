import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Item } from './item.entity';

@Entity({ name: 'additionals' })
export class Additional {
    @PrimaryGeneratedColumn()
    idadditionals: number;

    @Column({ length: 45 })
    stringAdditionals: string;

    @Column({ length: 45 })
    name: string;

    @Column()
    qntd: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    unitPrice: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    totalPrice: number;

    @Column()
    removable: boolean;

    @ManyToOne(() => Item, (item) => item.additionals)
    @JoinColumn({ name: 'item_id' })
    item: Item;
}
