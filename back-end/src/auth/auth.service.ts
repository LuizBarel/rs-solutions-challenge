import { BadRequestException, HttpCode, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/database/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    @HttpCode(201)
    async signUp(dto: CreateUserDto) {
        const user: User | null = await this.userService.findOneByEmail(
            dto.email,
        );
        if (user) return new BadRequestException('O usuário já existe');
        return this.userService.create(dto);
    }

    /* eslint-disable @typescript-eslint/no-unsafe-member-access */

    async signIn(body: any) {
        const user: User | null = await this.userService.findOneByEmail(
            body.email,
        );
        if (!user) return new BadRequestException('O usuário não existe');

        const isPasswordMatch: boolean = await bcrypt.compare(
            body.password,
            user.password,
        );
        if (!isPasswordMatch) return 'Email ou senha incorreto(s)';

        const payLoad = { sub: user.id, username: user.email };
        const accessToken: string = await this.jwtService.signAsync(payLoad);
        await this.userService.saveToken(user, accessToken);

        return { accessToken, username: user.name };
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
}
