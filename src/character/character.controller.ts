import { Controller, Get } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
    constructor(private readonly characterService: CharacterService) {}
@Get()
  getHello(): string {
    return this.characterService.getHello();
  }
}
