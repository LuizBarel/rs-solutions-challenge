import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SeruApiModule } from './seru-api/seru-api.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [SeruApiModule, HttpModule, ScheduleModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
