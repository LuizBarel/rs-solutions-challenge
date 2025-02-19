import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                global: true,
                secret: config.get('JWT_SECRET'),
                signOptions: { expiresIn: '7d' },
            }),
        }),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
