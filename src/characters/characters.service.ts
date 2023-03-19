import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Character } from './characters.entity';
import { CreateCharacterDto } from './createCharacter.dto';

@Injectable()
export class CharacterService {
  @InjectRepository(Character)
  private readonly characterRepository: Repository<Character>;

  /**
   * Fetches all characters.
   *
   * @returns Promise<Character[]>
   */
  getAllCharacters(): Promise<Character[]> {
    return this.characterRepository.find();
  }

  /**
   * Fetches all characters.
   *
   * @returns Promise<Character[]>
   */
  saveCharacter(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const {
      name,
      title,
      rarity,
      weapon,
      vision,
      birthday,
      birthmonth,
      description,
      constellation,
    } = createCharacterDto;
    const newCharacter = this.characterRepository.create({
      name,
      title,
      rarity,
      weapon,
      vision,
      birthday,
      birthmonth,
      description,
      constellation,
    });

    return this.characterRepository.save(newCharacter);
  }
}
