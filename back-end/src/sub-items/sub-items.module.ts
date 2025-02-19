import { Module } from '@nestjs/common';
import { SubItemsService } from './sub-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubItem } from 'src/database/entities/sub-item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SubItem])],
    controllers: [],
    providers: [SubItemsService],
})
export class SubItemsModule {}
