import { Injectable } from '@nestjs/common';
import { CardService } from 'src/card/card.service';
import { Payments } from 'src/database/entities/payment.entity';
import { QueryRunner } from 'typeorm';
// import { CreatePaymentDto } from './dto/create-payment.dto';
// import { UpdatePaymentDto } from './dto/update-payment.dto';
/* eslint-disable */

@Injectable()
export class PaymentsService {
    constructor(private cardService: CardService) {}

    async findOne(data, queryRunner: QueryRunner) {
        const payment = await queryRunner.manager.findOneBy(Payments, {
            method_payments: data.method,
            status_payments: data.status,
            changeFor: data.changeFor,
            change: data.change,
        });

        return payment;
    }

    async create(payment, queryRunner: QueryRunner, orderId?) {
        try {
            const paymentExisting = await queryRunner.manager.findOneBy(
                Payments,
                { stringPayments: payment.id },
            );
            if (paymentExisting) return paymentExisting;

            let card;
            if (payment.card)
                card = await this.cardService.create(payment.card, queryRunner);

            const dataForPayment = queryRunner.manager.create(Payments, {
                stringPayments: payment.id,
                status_payments: payment.status,
                total_payments: payment.total,
                method_payments: payment.method,
                createdAt: payment.createdAt,
                updatedAt: payment.updatedAt,
                changeFor: payment.changeFor,
                change: payment.change,
                card: card || null,
                order: orderId,
            });

            return await queryRunner.manager.save(Payments, dataForPayment);
        } catch (error) {
            console.log('Erro ao criar pagamento: ' + error);
            throw error;
        }
    }
}
