import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { StereotypeService } from './stereotype.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('stereotype')
export class StereotypeController {
  constructor(private readonly stereotypeService: StereotypeService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.stereotypeService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.stereotypeService.findOne(id);
  }

  
}
