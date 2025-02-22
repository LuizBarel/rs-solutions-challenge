import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'card' })
export class Card {
    @PrimaryGeneratedColumn()
    idcard: number;

    @Column({ length: 45, nullable: true })
    brand?: string;

    @Column({ length: 45, nullable: true })
    brandCode?: string;

    @Column({ length: 45, nullable: true })
    nsu?: string;

    @Column({ length: 45, nullable: true })
    acquirer?: string;

    @Column({ length: 45, nullable: true })
    terminalNumber?: string;

    @Column({ length: 45, nullable: true })
    installments?: string;

    @Column({ length: 45, nullable: true })
    firstSixDigits?: string;

    @Column({ length: 45, nullable: true })
    lastFourDigits?: string;

    @Column({ length: 45, nullable: true })
    authorizationCode?: string;
}
