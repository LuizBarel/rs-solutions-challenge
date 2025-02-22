import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from 'src/database/entities/card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Card])],
    controllers: [],
    providers: [CardService],
    exports: [CardService],
})
export class CardModule {}
