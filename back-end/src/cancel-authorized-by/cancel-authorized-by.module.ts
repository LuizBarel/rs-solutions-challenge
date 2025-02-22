import { Module } from '@nestjs/common';
import { CancelAuthorizedByService } from './cancel-authorized-by.service';
import { CancelAuthorizedBy } from 'src/database/entities/cancel-authorized-by.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CancelAuthorizedBy])],
    controllers: [],
    providers: [CancelAuthorizedByService],
    exports: [CancelAuthorizedByService],
})
export class CancelAuthorizedByModule {}
