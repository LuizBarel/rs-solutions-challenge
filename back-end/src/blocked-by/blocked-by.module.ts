import { Module } from '@nestjs/common';
import { BlockedByService } from './blocked-by.service';
import { BlockedBy } from 'src/database/entities/blocked-by.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BlockedBy])],
    controllers: [],
    providers: [BlockedByService],
    exports: [BlockedByService],
})
export class BlockedByModule {}
