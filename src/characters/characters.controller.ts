import { Inject, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe, Controller, Get, Post, Body } from '@nestjs/common';

import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { Character } from './characters.entity';
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
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({
    type: Character,
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'Error in request body',
  })
  save(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.saveCharacter(createCharacterDto);
  }
}
