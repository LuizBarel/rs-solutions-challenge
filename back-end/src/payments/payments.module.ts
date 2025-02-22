import { forwardRef, Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payments } from 'src/database/entities/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { CardModule } from 'src/card/card.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Payments]),
        forwardRef(() => TransactionsModule),
        CardModule,
    ],
    controllers: [],
    providers: [PaymentsService],
    exports: [PaymentsService],
})
export class PaymentsModule {}
