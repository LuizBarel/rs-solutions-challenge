import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/signin.dto';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    @ApiOperation({ summary: 'SignUp do usuário' })
    @ApiResponse({ status: 201, description: 'Dados do usuário cadastrado' })
    signup(@Body() createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto);
    }

    @Post('signin')
    @ApiOperation({ summary: 'SignIn do usuário' })
    @ApiResponse({
        status: 200,
        description: 'Token e username do usuário logado',
    })
    signin(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }
}
