
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { tab_user, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: number): Promise<tab_user | null> {
  return this.prisma.tab_user.findUnique({
    where: { id },
  });
}
  
  async getUserByEmail(email: string): Promise<tab_user | null> {
  return this.prisma.tab_user.findUnique({
    where: { email },
  });
}

  async getUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.tab_userWhereUniqueInput;
    where?: Prisma.tab_userWhereInput;
    orderBy?: Prisma.tab_userOrderByWithRelationInput;
  }): Promise<tab_user[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tab_user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.tab_userCreateInput): Promise<tab_user> {
    const passwordHash = await bcrypt.hash(data.password, 10);
    
    return this.prisma.tab_user.create({
    data: {
      ...data,
      password: passwordHash,
    },
  });
  }

  async updateUser(params: {
    where: Prisma.tab_userWhereUniqueInput;
    data: Prisma.tab_userUpdateInput;
  }): Promise<tab_user> {
    const { where, data } = params;
    return this.prisma.tab_user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.tab_userWhereUniqueInput): Promise<tab_user> {
    return this.prisma.tab_user.delete({
      where,
    });
  }
}
