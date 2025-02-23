import { Injectable } from '@nestjs/common';
import { CreatedByService } from 'src/created-by/created-by.service';
import { Transaction } from 'src/database/entities/transaction.entity';
import { PaymentsService } from 'src/payments/payments.service';
import { QueryRunner } from 'typeorm';
// import { CreateTransactionDto } from './dto/create-transaction.dto';
// import { UpdateTransactionDto } from './dto/update-transaction.dto';
/* eslint-disable */

@Injectable()
export class TransactionsService {
    constructor(
        private createdByService: CreatedByService,
        private paymentService: PaymentsService,
    ) {}

    async create(transactions, id, queryRunner: QueryRunner) {
        for (const transaction of transactions) {
            try {
                const transactionExisting = await queryRunner.manager.findOneBy(
                    Transaction,
                    { stringTransactions: transaction.id },
                );
                if (transactionExisting) continue;

                let createdBy, payment;
                if (transaction.createdBy)
                    createdBy = await this.createdByService.findOneByCode(
                        transaction.createdBy.code,
                        queryRunner,
                    );
                if (transaction.type == 'payment')
                    payment = await this.paymentService.findOne(
                        transaction.payment,
                        queryRunner,
                    );

                const dataForTransaction = queryRunner.manager.create(
                    Transaction,
                    {
                        stringTransactions: transaction.id,
                        total: transaction.total,
                        type: transaction.type,
                        createdAt: transaction.createdAt,
                        updatedAt: transaction.updatedAt,
                        payment: payment,
                        note: transaction.note,
                        createdBy: createdBy,
                        cashier: id,
                    },
                );

                await queryRunner.manager.save(Transaction, dataForTransaction);
            } catch (error) {
                console.log('Erro ao criar transação: ' + error);
                throw error;
            }
        }
    }
}
