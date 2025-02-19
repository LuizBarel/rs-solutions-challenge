import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'device' })
export class Device {
    @PrimaryGeneratedColumn()
    iddevice: number;

    @Column({ length: 255 })
    serial: string;

    @Column({ length: 50 })
    model: string;
}
