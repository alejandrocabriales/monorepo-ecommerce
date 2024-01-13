import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(userName: string, password: string) {
    const user = await this.usersService.findUsersByUserName('manuel');
    console.log('user', user);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userName, username: user.password };
    return {
      payload,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
