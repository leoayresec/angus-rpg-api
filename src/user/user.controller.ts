import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { Prisma, tab_user } from '@prisma/client';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }


    @Post('signup')
    async signupUser(
        @Body(new ValidationPipe()) createUserDto : CreateUserDTO
    ): Promise<tab_user> {
        return this.userService.createUser(createUserDto);
    }
    @UseGuards(AuthGuard)
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<tab_user> {
        const user = await this.userService.getUserById(Number(id));
        if (!user) {
            throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
        }
        return user;
    }


}
