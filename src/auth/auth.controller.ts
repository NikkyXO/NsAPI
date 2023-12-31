/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
//import { LocalStrategy } from './strategies/local-strategy';
import { createUserDTO } from 'src/user/DTOs/createUserDTO';
import { UserService } from 'src/user/user.service';
import { LocalAUthGuard } from './guards/local-auth.guard';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginUserDto } from './dtos/LoginUserDto';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
        ){}


    @UseGuards(LocalAUthGuard)
    @Post('login')
    @ApiBody({ type: LoginUserDto })
    // For arrays : @ApiBody({ type: [LoginUserDto] })
    async loginUser(@Request() req) { 
        console.log("user in login ctrller: ", req.user)
        return await this.authService.loginUser(req.user);
    }

    @Post('register')
    async RegisterUser(@Body() createUser: createUserDTO) {
        return await this.userService.createNewUser(createUser);

    }

    @UseGuards(RefreshJwtGuard)
    @Post('refresh')
    async RefreshToken(@Request() req) {
        return await this.authService.refreshToken(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        console.log("in profile: ", req)
        return req.user;
    }
}
