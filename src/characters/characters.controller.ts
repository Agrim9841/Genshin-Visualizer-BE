import { Inject } from '@nestjs/common/decorators';
import { Controller, Get, Post, Body } from '@nestjs/common';

import { ApiCreatedResponse } from '@nestjs/swagger';

import { CharacterService } from './characters.service';
import { CreateCharacterDto } from './createCharacter.dto';

@Controller('characters')
export class CharacterController {
  @Inject(CharacterService)
  private readonly characterService: CharacterService;

  @Get()
  getAll() {
    return this.characterService.getAllCharacters();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  save(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.saveCharacter(createCharacterDto);
  }
}
