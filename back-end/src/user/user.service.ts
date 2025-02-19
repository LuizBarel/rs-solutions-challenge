import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id: number): Promise<User> {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) throw NotFoundException;
        return user;
    }

    async findOneByEmail(email: string) {
        const user = await this.usersRepository.findOneBy({ email });
        if (!user) return null;
        return user;
    }

    async create(dto: CreateUserDto) {
        dto.password = await bcrypt.hash(dto.password, 10);
        const user = this.usersRepository.create(dto);
        this.usersRepository.save(user);
        return { message: 'Usuário criado com sucesso' };
    }

    async update(id: number, dto: UpdateUserDto) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) throw NotFoundException;
        this.usersRepository.merge(user, dto);
        return this.usersRepository.save(user);
    }

    async remove(id: number): Promise<void> {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) throw NotFoundException;
        await this.usersRepository.delete(id);
    }

    async saveToken(user: User, token: string) {
        await this.usersRepository.update(user.id, { token });
    }
}
