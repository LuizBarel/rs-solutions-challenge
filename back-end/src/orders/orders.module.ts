import { forwardRef, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { SalesChannelModule } from 'src/sales-channel/sales-channel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/database/entities/order.entity';

@Module({
    imports: [
        forwardRef(() => SalesChannelModule),
        TypeOrmModule.forFeature([Order]),
    ],
    controllers: [],
    providers: [OrdersService],
})
export class OrdersModule {}
