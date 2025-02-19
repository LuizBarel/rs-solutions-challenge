import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payments } from 'src/database/entities/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Payments])],
    controllers: [],
    providers: [PaymentsService],
})
export class PaymentsModule {}
