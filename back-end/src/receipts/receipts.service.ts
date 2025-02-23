import { Injectable } from '@nestjs/common';
import { Receipt } from 'src/database/entities/receipt.entity';
import { QueryRunner } from 'typeorm';
// import { CreateReceiptDto } from './dto/create-receipt.dto';
// import { UpdateReceiptDto } from './dto/update-receipt.dto';
/* eslint-disable */

@Injectable()
export class ReceiptsService {
    async create(receipt, queryRunner: QueryRunner) {
        try {
            const receiptExisting = await queryRunner.manager.findOneBy(
                Receipt,
                {
                    card: receipt.card,
                    cash: receipt.cash,
                    pix: receipt.pix,
                },
            );
            if (receiptExisting) return receiptExisting;

            const dataForReceipt = queryRunner.manager.create(Receipt, {
                card: receipt.card,
                cash: receipt.cash,
                pix: receipt.pix,
            });

            return await queryRunner.manager.save(Receipt, dataForReceipt);
        } catch (error) {
            console.log('Erro ao criar recibo: ' + error);
            throw error;
        }
    }
}
