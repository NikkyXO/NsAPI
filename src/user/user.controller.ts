/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDTO } from './DTOs/createUserDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get(':id')
    findUser(@Param('id') id : string) {
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() newUser: createUserDTO) {
        return newUser;
    }
}
