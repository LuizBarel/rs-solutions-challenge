import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Icms } from './icm.entity';
import { Pis } from './pis.entity';
import { Cofins } from './cofin.entity';

@Entity({ name: 'taxInfo' }) // Nome da tabela no banco
export class TaxInfo {
    @PrimaryGeneratedColumn()
    idtaxInfo: number;

    @Column({ length: 45, nullable: true })
    cfop?: string;

    @Column({ length: 45, nullable: true })
    cest?: string;

    @Column({ length: 45, nullable: true })
    gtin?: string;

    @Column({ length: 45, nullable: true })
    ncm?: string;

    @Column({ length: 45, nullable: true })
    origin?: string;

    @Column({ length: 45, nullable: true })
    unityType?: string;

    // Relacionamentos
    @ManyToOne(() => Icms, { nullable: true })
    @JoinColumn({ name: 'icms' })
    icms?: Icms;

    @ManyToOne(() => Pis, { nullable: true })
    @JoinColumn({ name: 'pis' })
    pis?: Pis;

    @ManyToOne(() => Cofins, { nullable: true })
    @JoinColumn({ name: 'cofins' })
    cofins?: Cofins;
}
