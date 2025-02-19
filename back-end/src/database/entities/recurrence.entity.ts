import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Recurrence {
    @PrimaryGeneratedColumn()
    idrecurrence: number;

    @Column({ length: 25 })
    type: string;

    @Column()
    day: number;
}
