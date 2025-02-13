import { Module } from '@nestjs/common';
import { SeruApiService } from './seru-api.service';
import { HttpModule } from '@nestjs/axios';
import { SeruApiController } from './seru-api.controller';

@Module({
    imports: [HttpModule],
    controllers: [SeruApiController],
    providers: [SeruApiService],
})
export class SeruApiModule {}
