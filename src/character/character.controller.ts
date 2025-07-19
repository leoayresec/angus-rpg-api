import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterDto } from './dto/character.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createCharacterDto: CharacterDto, @Request() req: any) {
    return this.characterService.create(createCharacterDto, req);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.characterService.findAll();
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }
}
