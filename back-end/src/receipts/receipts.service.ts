import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Receipt } from 'src/database/entities/receipt.entity';
import { Repository } from 'typeorm';
// import { CreateReceiptDto } from './dto/create-receipt.dto';
// import { UpdateReceiptDto } from './dto/update-receipt.dto';
/* eslint-disable */

@Injectable()
export class ReceiptsService {
    constructor(
        @InjectRepository(Receipt)
        private receiptRepository: Repository<Receipt>,
    ) {}

    async create(receipt) {
        const receiptExisting = await this.receiptRepository.findOneBy({
            card: receipt.card,
            cash: receipt.cash,
            pix: receipt.pix,
        });

        if (receiptExisting) return receiptExisting.idreceipts;

        const dataForReceipt = this.receiptRepository.create({
            card: receipt.card,
            cash: receipt.cash,
            pix: receipt.pix,
        });

        return await this.receiptRepository.save(dataForReceipt);
    }
}
