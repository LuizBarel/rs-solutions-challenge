import { forwardRef, Module } from '@nestjs/common';
import { SalesChannelService } from './sales-channel.service';
import { CashiersModule } from 'src/cashiers/cashiers.module';
import { OrdersModule } from 'src/orders/orders.module';
import { SalesChannel } from 'src/database/entities/sales-channel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        forwardRef(() => CashiersModule),
        forwardRef(() => OrdersModule),
        TypeOrmModule.forFeature([SalesChannel]),
    ],
    controllers: [],
    providers: [SalesChannelService],
})
export class SalesChannelModule {}
