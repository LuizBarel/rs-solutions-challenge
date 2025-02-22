import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/database/entities/card.entity';
import { Repository } from 'typeorm';
// import { CreateCardDto } from './dto/create-card.dto';
// import { UpdateCardDto } from './dto/update-card.dto';
/* eslint-disable */

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(Card)
        private cardRepository: Repository<Card>,
    ) {}

    async findOne(firstNums, lastNums) {
        const card = await this.cardRepository.findOneBy({
            firstSixDigits: firstNums,
            lastFourDigits: lastNums,
        });
        if (!card) return null;
        return card;
    }

    async create(card) {
        const cardExisting = await this.findOne(
            card.firstSixDigits,
            card.lastFourDigits,
        );
        if (cardExisting) return cardExisting.idcard;

        const dataForCard = this.cardRepository.create({
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

        return this.cardRepository.save(dataForCard);
    }
}
