import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Company } from './company.entity';
import { Response } from './response.entity';

@Entity({ name: 'invoice' })
export class Invoice {
    @PrimaryGeneratedColumn()
    idInvoice: number;

    @Column({ length: 45 })
    status: string;

    @Column({ length: 45 })
    serie: string;

    @Column({ length: 45 })
    number: string;

    @Column({ length: 45 })
    xml: string;

    @Column({ length: 45 })
    accessKey: string;

    @Column({ length: 2000 })
    url: string;

    @Column({ length: 45 })
    model: string;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column({ type: 'timestamp' })
    updateAt: Date;

    // Relacionamentos
    @ManyToOne(() => Company)
    @JoinColumn({ name: 'company' })
    company: Company;

    @ManyToOne(() => Response, { nullable: true })
    @JoinColumn({ name: 'response' })
    response?: Response;
}
