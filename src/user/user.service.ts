import { Injectable } from '@nestjs/common';
import { createUserDTO, updateUserDTO } from './DTOs/createUserDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createNewUser(createUser: createUserDTO) {
    try {
      const user = await this.userRepository.create(createUser);
      const savedUser = await this.userRepository.save(user);
      const { password, ...result } = savedUser;
      console.log(password);
      return result;
    } catch (err) {
      console.log(err.message);
      return {
        status: 'failed',
        message: err.message,
      };
    }
  }

  async getUserById(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async findUserWithUsername(username: string) {
    return await this.userRepository.findOne({ where: { username: username } });
  }

  async findUserWithEmail(email: string) {
    console.log('in find with email: ', email);
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async updateUser(id: number, updateUser: updateUserDTO) {
    return await this.userRepository.update(id, updateUser);
  }
}
