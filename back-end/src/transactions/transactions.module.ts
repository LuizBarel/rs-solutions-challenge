import { forwardRef, Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from 'src/database/entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatedByModule } from 'src/created-by/created-by.module';
import { PaymentsModule } from 'src/payments/payments.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Transaction]),
        CreatedByModule,
        forwardRef(() => PaymentsModule),
    ],
    controllers: [],
    providers: [TransactionsService],
    exports: [TransactionsService],
})
export class TransactionsModule {}
