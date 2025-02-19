import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Response {
    @PrimaryGeneratedColumn()
    idresponse: number;

    @Column({ length: 255, nullable: true })
    code?: string;

    @Column({ length: 45, nullable: true })
    message?: string;
}
