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

// passport-local strategy by default expects properties called username and password
// n the request body. Pass an options object to specify different property names,
// for example: super({ usernameField: 'email' }). See the passport documentation: 
// http://www.passportjs.org/concepts/authentication/strategies/
