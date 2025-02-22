import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatedByService } from 'src/created-by/created-by.service';
import { Transaction } from 'src/database/entities/transaction.entity';
import { PaymentsService } from 'src/payments/payments.service';
import { Repository } from 'typeorm';
// import { CreateTransactionDto } from './dto/create-transaction.dto';
// import { UpdateTransactionDto } from './dto/update-transaction.dto';
/* eslint-disable */

@Injectable()
export class TransactionsService {
    constructor(
        @InjectRepository(Transaction)
        private transactionRepository: Repository<Transaction>,
        private createdByService: CreatedByService,
        private paymentService: PaymentsService,
    ) {}

    async create(transactions, id) {
        for (const transaction of transactions) {
            try {
                const transactionExisting =
                    await this.transactionRepository.findOneBy({
                        stringTransactions: transaction.id,
                    });
                if (transactionExisting)
                    return transactionExisting.idtransactions;

                let createdBy;
                let payment;
                if (transaction.createdBy) {
                    createdBy = await this.createdByService.findOneByCode(
                        transaction.createdBy.code,
                    );
                }
                if (transaction.type == 'payment') {
                    payment = await this.paymentService.findOne(
                        transaction.payment,
                    );
                }

                const dataForTransaction = this.transactionRepository.create({
                    stringTransactions: transaction.id,
                    total: transaction.total,
                    type: transaction.type,
                    createdAt: transaction.createdAt,
                    updatedAt: transaction.updatedAt,
                    payment: payment,
                    note: transaction.note,
                    createdBy: createdBy,
                    cashier: id,
                });

                this.transactionRepository.save(dataForTransaction);
            } catch (error) {
                console.log('Erro ao criar transações: ' + error.message);
            }
        }
    }
}
