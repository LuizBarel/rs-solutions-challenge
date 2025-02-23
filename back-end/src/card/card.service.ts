import { Injectable } from '@nestjs/common';
import { Card } from 'src/database/entities/card.entity';
import { QueryRunner } from 'typeorm';
// import { CreateCardDto } from './dto/create-card.dto';
// import { UpdateCardDto } from './dto/update-card.dto';
/* eslint-disable */

@Injectable()
export class CardService {
    async findOne(firstNums, lastNums, queryRunner: QueryRunner) {
        const card = await queryRunner.manager.findOneBy(Card, {
            firstSixDigits: firstNums,
            lastFourDigits: lastNums,
        });
        return card || null;
    }

    async create(card, queryRunner: QueryRunner) {
        try {
            const cardExisting = await this.findOne(
                card.firstSixDigits,
                card.lastFourDigits,
                queryRunner,
            );
            if (cardExisting) return cardExisting;

            const dataForCard = queryRunner.manager.create(Card, {
                brand: card.brand,
                brandCode: card.brandCode,
                nsu: card.nsu,
                acquirer: card.acquirer,
                authorizationCode: card.authorizationCode,
                terminalNumber: card.terminalNumber,
                installments: card.installments,
                firstSixDigits: card.firstSixDigits,
                lastFourDigits: card.lastFourDigits,
            });

            return queryRunner.manager.save(Card, dataForCard);
        } catch (error) {
            console.log('Erro ao criar cartão: ' + error);
            throw error;
        }
    }
}
