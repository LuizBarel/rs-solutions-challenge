import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from 'src/database/entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    controllers: [],
    providers: [ItemsService],
})
export class ItemsModule {}
