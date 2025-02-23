import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        required: true,
        default: 'example',
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Email do usuário',
        required: true,
        default: 'user@example.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Senha do usuário',
        required: true,
        default: 'password',
    })
    @IsString()
    password: string;
}
