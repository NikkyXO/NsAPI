/* eslint-disable prettier/prettier */
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private  authService: AuthService) {
        super();
    }

    async validate(username: string, password: string) {
        const user = await this.authService.verifyUser(username, password);
        if (!user) {
            throw new UnauthorizedException("Invalid login credentials");
        }
        console.log("in local strategy", user)
        return user;
    }
}
