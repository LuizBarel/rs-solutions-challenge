import { forwardRef, Module } from '@nestjs/common';
import { SeruApiService } from './seru-api.service';
import { HttpModule } from '@nestjs/axios';
import { SeruApiController } from './seru-api.controller';
import { OrdersModule } from 'src/orders/orders.module';
import { CashiersModule } from 'src/cashiers/cashiers.module';

@Module({
    imports: [HttpModule, OrdersModule, forwardRef(() => CashiersModule)],
    controllers: [SeruApiController],
    providers: [SeruApiService],
    exports: [SeruApiService],
})
export class SeruApiModule {}
