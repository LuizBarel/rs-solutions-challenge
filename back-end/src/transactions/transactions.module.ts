import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from 'src/database/entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Transaction])],
    controllers: [],
    providers: [TransactionsService],
})
export class TransactionsModule {}
