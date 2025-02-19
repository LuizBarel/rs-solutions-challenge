import { Module } from '@nestjs/common';
import { CanceledByService } from './canceled-by.service';
import { CanceledBy } from 'src/database/entities/canceled-by.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CanceledBy])],
    controllers: [],
    providers: [CanceledByService],
})
export class CanceledByModule {}
