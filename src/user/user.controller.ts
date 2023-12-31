/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { createUserDTO, updateUserDTO } from './DTOs/createUserDTO';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService,
        private readonly commentService: CommentService) {}

    @Get(':id')
    findUser(@Param('id') id : number) {
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() newUser: createUserDTO) {
        return this.userService.createNewUser(newUser);
    }

    @Put(":id")
    updateUser(@Param("id") id: number, @Body() updateUser: updateUserDTO) {
        return this.userService.updateUser(id, updateUser);
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id/comments")
    findCommentById(@Param("id") id: string) {
        return this.commentService.getCommentById(id);
    }
}
