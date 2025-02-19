import { Module } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { Receipt } from 'src/database/entities/receipt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Receipt])],
    controllers: [],
    providers: [ReceiptsService],
})
export class ReceiptsModule {}
