import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardService } from 'src/card/card.service';
import { Payments } from 'src/database/entities/payment.entity';
import { Repository } from 'typeorm';
// import { CreatePaymentDto } from './dto/create-payment.dto';
// import { UpdatePaymentDto } from './dto/update-payment.dto';
/* eslint-disable */

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(Payments)
        private paymentsRepository: Repository<Payments>,
        private cardService: CardService,
    ) {}

    async findOne(data) {
        const payment = await this.paymentsRepository.findOneBy({
            method_payments: data.method,
            status_payments: data.status,
            changeFor: data.changeFor,
            change: data.change,
        });

        return payment;
    }

    async create(payment, orderId?) {
        const paymentExisting = await this.paymentsRepository.findOneBy({
            stringPayments: payment.id,
        });
        if (paymentExisting) return paymentExisting.idpayments;

        let card;
        if (payment.card) {
            card = await this.cardService.create(payment.card);
        }

        const dataForPayment = this.paymentsRepository.create({
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

        return this.paymentsRepository.save(dataForPayment);
    }
}
