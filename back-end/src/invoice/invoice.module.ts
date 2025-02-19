import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from 'src/database/entities/invoice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Invoice])],
    controllers: [],
    providers: [InvoiceService],
})
export class InvoiceModule {}
