import { forwardRef, Module } from '@nestjs/common';
import { CashiersService } from './cashiers.service';
import { SalesChannelModule } from 'src/sales-channel/sales-channel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cashier } from 'src/database/entities/cashier.entity';

@Module({
    imports: [
        forwardRef(() => SalesChannelModule),
        TypeOrmModule.forFeature([Cashier]),
    ],
    controllers: [],
    providers: [CashiersService],
})
export class CashiersModule {}
