import { Module } from '@nestjs/common';
import { CofinsService } from './cofins.service';
import { Cofins } from 'src/database/entities/cofin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Cofins])],
    controllers: [],
    providers: [CofinsService],
})
export class CofinsModule {}
