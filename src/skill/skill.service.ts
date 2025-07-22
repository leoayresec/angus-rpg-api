import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) { }
  async findAll() {
    return await this.prisma.tab_skill.findMany({ include: { type: true } });
  }

  async findOne(id: number) {
    const skill = await this.prisma.tab_skill.findFirst({
      where: { id },
      include: { type: true }
    });

    if (!skill) {
      throw new NotFoundException(`Skill com ID ${id} não encontrado`);
    }

    return skill;
  }

  findByType(typeId: number) {
    return this.prisma.tab_skill.findMany({
      where: { skillTypeId: typeId },
      include: { type: true }
    });
  }

}
