import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { SkillService } from './skill.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) { }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.skillService.findAll();
  }

  @Get('skill/:id')
  @UseGuards(AuthGuard)
  findOne(@Param('id', ParseIntPipe) id) {
    return this.skillService.findOne(id);
  }
  @Get('skills-type/:id')
  @UseGuards(AuthGuard)
  findByType(@Param('id', ParseIntPipe) id) {
    return this.skillService.findByType(id);
  }

}
