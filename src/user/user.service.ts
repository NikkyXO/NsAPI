/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { createUserDTO, updateUserDTO } from './DTOs/createUserDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async createNewUser(createUser: createUserDTO) {
        const user =  await this.userRepository.create(createUser);
        return await this.userRepository.save(user);
    }

    async getUserById(id: number) {
        return await this.userRepository.findOne({where: {id: id}});
    }

    getAllUsers() {

    }

    async updateUser(id: number, updateUser: updateUserDTO) {
        return await this.userRepository.update(id, updateUser);
    }
}
