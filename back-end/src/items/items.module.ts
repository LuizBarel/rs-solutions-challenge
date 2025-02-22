import { forwardRef, Module } from '@nestjs/common';
import { AdditionalsModule } from 'src/additionals/additionals.module';
import { CancelAuthorizedByModule } from 'src/cancel-authorized-by/cancel-authorized-by.module';
import { CanceledByModule } from 'src/canceled-by/canceled-by.module';
import { CreatedByModule } from 'src/created-by/created-by.module';
import { OrdersModule } from 'src/orders/orders.module';
import { TaxInfoModule } from 'src/tax-info/tax-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/database/entities/item.entity';
import { ItemsService } from './items.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Item]),
        AdditionalsModule,
        TaxInfoModule,
        CreatedByModule,
        CanceledByModule,
        CancelAuthorizedByModule,
        forwardRef(() => OrdersModule),
    ],
    controllers: [],
    providers: [ItemsService],
    exports: [ItemsService],
})
export class ItemsModule {}
