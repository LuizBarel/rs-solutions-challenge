import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @ApiOperation({ summary: 'Busca todos os usuários, rota apenas para teste' })
    findAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Busca um usuário específico, rota apenas para teste' })
    findOneUser(@Param('id') id: number) {
        return this.userService.findOne(id);
    }
}
