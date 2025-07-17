import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, pass: string): Promise<any> {

        const user = await this.usersService.getUserByEmail(email);
        if (!user) {
            throw new UnauthorizedException();
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };

    }
}