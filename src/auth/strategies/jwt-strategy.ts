import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    console.log(
      'in construct jwt strategy:  ',
      ExtractJwt.fromAuthHeaderAsBearerToken(),
    );
    console.log('secret: ', jwtConstants.secret);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    console.log('in jwtAuth.validate', payload);
    return {
      user: payload.sub,
      username: payload.username,
    };
  }
}
