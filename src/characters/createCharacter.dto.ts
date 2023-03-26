import { ApiProperty } from '@nestjs/swagger';

import {
  Max,
  Min,
  IsInt,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

import { VALIDATION_MESSAGE } from 'src/constants/lang';

import { VisionEnum } from 'src/globalEnums/vision.enum';
import { WeaponTypeEnum } from 'src/globalEnums/weapon.enum';
import { CharacterRarityEnum } from 'src/globalEnums/rarity.enum';

export class CreateCharacterDto {
  @IsNotEmpty({ message: VALIDATION_MESSAGE.REQIUIRED('Name') })
  @ApiProperty({
    uniqueItems: true,
    example: 'Tartaglia',
    description: 'The name of the character.',
  })
  name: string;

  @IsNotEmpty({ message: VALIDATION_MESSAGE.REQIUIRED('Title') })
  @ApiProperty({
    example: 'Childe',
    uniqueItems: true,
    description:
      'The title held by the character or how they are known by people.',
  })
  title: string;

  // TO Be Added.
  // @ApiProperty({
  //   required: false,
  //   description: 'The nation from which the character hails from.',
  // })
  // nation: string;

  @IsOptional()
  @IsEnum(CharacterRarityEnum)
  @ApiProperty({
    required: false,
    enum: CharacterRarityEnum,
    enumName: 'CharacterRarity',
    description: 'The rarity of character.',
  })
  rarity: CharacterRarityEnum;

  @IsOptional()
  @IsEnum(WeaponTypeEnum)
  @ApiProperty({
    required: false,
    enum: WeaponTypeEnum,
    enumName: 'WeaponType',
    description: 'The weapon type that the character wields during the battle.',
  })
  weapon: WeaponTypeEnum;

  @IsOptional()
  @IsEnum(VisionEnum)
  @ApiProperty({
    required: false,
    enum: VisionEnum,
    enumName: 'Vision',
    description: 'The element type that the character wields.',
  })
  vision: VisionEnum;

  @IsInt()
  @IsOptional()
  @Min(1, { message: VALIDATION_MESSAGE.MIN('Birth month', 1) })
  @Max(32, { message: VALIDATION_MESSAGE.MAX('Birth month', 32) })
  @ApiProperty({
    minimum: 1,
    example: 20,
    maximum: 32,
    required: false,
    description: 'The birth day of the character.',
  })
  birthday: number;

  @IsInt()
  @IsOptional()
  @Min(1, { message: VALIDATION_MESSAGE.MIN('Birth month', 1) })
  @Max(12, { message: VALIDATION_MESSAGE.MAX('Birth month', 12) })
  @ApiProperty({
    example: 7,
    minimum: 1,
    maximum: 12,
    required: false,
    description: 'The birth month of the character.',
  })
  birthmonth: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    required: false,
    uniqueItems: true,
    example: 'Monoceros Caeli',
    description: "The name of the character's constellation.",
  })
  constellation: number;

  @ApiProperty({
    required: false,
    description: "The character's description.",
    example: `No. 11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.`,
  })
  description: string;
}
