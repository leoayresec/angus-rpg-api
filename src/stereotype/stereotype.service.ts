import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class StereotypeService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.tab_stereotype.findMany();
  }

  async findOne(id: number) {
    const stereotype = await this.prisma.tab_stereotype.findFirst({
          where: { id }
        });
    
        if (!stereotype) {
          throw new NotFoundException(`Personagem com ID ${id} não encontrado`);
        }
    
        return stereotype;
  }

}
