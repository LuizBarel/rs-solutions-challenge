import { Module } from '@nestjs/common';
import { CreatedByService } from './created-by.service';
import { CreatedBy } from 'src/database/entities/created-by.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CreatedBy])],
    controllers: [],
    providers: [CreatedByService],
})
export class CreatedByModule {}
