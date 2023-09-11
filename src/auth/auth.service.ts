/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private  readonly userService: UserService,
        private readonly jwtService: JwtService
        
        ) { }


    async verifyUser(username: string, password: string) {
        const user = await this.userService.findOneWithUsername(username);
        console.log("user here: ", user);
        
        const valid = await bcrypt.compare(password, user.password)

        if (user && valid) {
            const { password, ...result} = user;
            return result;
        }
        return null; 

    }

    async loginUser(user: User){
        try {
            console.log("user here in loginUser: ", user);

            const payload = { username: user.email,
                sub: {
                    id : user.id,
                    name: user.username
                }
            };
    
            return {
                ...user,
                access_token: this.jwtService.sign(payload),
                refresh_token: this.jwtService.sign(payload, { expiresIn: '7d'}),
            };
            
        } catch (err) {
            return {
                statusCode: 400,
                status: err.status,
                message: err.message,
                stack: err.stack
            }
        }
        
        
    }

    async refreshToken(user: User){
        try {
            const payload = { username: user.email,
                sub: {
                    id : user.id,
                    name: user.username
                }
            };
    
            return {
                access_token: this.jwtService.sign(payload),
            };
            
        } catch (err) {
            return {
                statusCode: 400,
                status: err.status,
                message: err.message,
                stack: err.stack
            }
        }
        
        
    }
}
