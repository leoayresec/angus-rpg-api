import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CharacterDto } from './dto/character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CharacterDto, req: any) {
  const {
    skills,
    weapons,
    armors,
    items,
    ...characterData
  } = dto;

  const data: any = {
    ...characterData,
    userId: req.user.sub,
  };

  if (skills && skills.length > 0) {
    data.skills = { create: skills };
  }

  if (weapons && weapons.length > 0) {
    data.weapons = { create: weapons };
  }

  if (armors && armors.length > 0) {
    data.armors = { create: armors };
  }

  if (items && items.length > 0) {
    data.items = { create: items };
  }
 
  return this.prisma.tab_character.create({
    data,
    include: {
      skills: true,
      weapons: true,
      armors: true,
      items: true,
    },
  });
}


  async findAll() {
    return this.prisma.tab_character.findMany({
      include: {
        skills: true,
        weapons: true,
        armors: true,
        items: true,
      },
    });
  }

  async findOne(id: number, userId: number) {
    const character = await this.prisma.tab_character.findFirst({
      where: { id, userId },
      include: {
        skills: true,
        weapons: true,
        armors: true,
        items: true,
      },
    });

    if (!character) {
      throw new NotFoundException(`Personagem com ID ${id} não encontrado`);
    }

    return character;
  }

 
  async remove(id: number) {
    return this.prisma.tab_character.delete({
      where: { id },
    });
  }
}
