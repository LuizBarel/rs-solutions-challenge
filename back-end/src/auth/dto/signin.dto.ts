import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class SignInDto {
    @ApiProperty({
        description: 'O email do usuário',
        example: 'user@example.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'A senha do usuário', example: 'password' })
    @IsString()
    password: string;
}
