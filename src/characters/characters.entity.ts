import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

import { VisionEnum } from 'src/globalEnums/vision.enum';
import { WeaponTypeEnum } from 'src/globalEnums/weapon.enum';
import { CharacterRarityEnum } from 'src/globalEnums/rarity.enum';

@Entity()
export class Character {
  @ApiProperty({
    uniqueItems: true,
    description: 'The character id.',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    uniqueItems: true,
    example: 'Tartaglia',
    description: 'The name of the character.',
  })
  @Column({ unique: true, nullable: true })
  name: string;

  @ApiProperty({
    example: 'Childe',
    uniqueItems: true,
    description:
      'The title held by the character or how they are known by people.',
  })
  @Column({ unique: true, nullable: true })
  title: string;

  // To Be Added.
  // @Column({ nullable: true })
  // nation: string;

  @ApiProperty({
    required: false,
    enum: CharacterRarityEnum,
    enumName: 'CharacterRarity',
    description: 'The rarity of character.',
  })
  @Column({ type: 'enum', nullable: true, enum: CharacterRarityEnum })
  rarity: CharacterRarityEnum;

  @ApiProperty({
    required: false,
    enum: WeaponTypeEnum,
    enumName: 'WeaponType',
    description: 'The weapon type that the character wields during the battle.',
  })
  @Column({ type: 'enum', nullable: true, enum: WeaponTypeEnum })
  weapon: WeaponTypeEnum;

  @ApiProperty({
    required: false,
    enum: VisionEnum,
    enumName: 'Vision',
    description: 'The element type that the character wields.',
  })
  @Column({ type: 'enum', nullable: true, enum: VisionEnum })
  vision: VisionEnum;

  @ApiProperty({
    minimum: 1,
    example: 20,
    maximum: 32,
    required: false,
    description: 'The birth day of the character.',
  })
  @Column({ nullable: true })
  birthday: number;

  @ApiProperty({
    example: 7,
    minimum: 1,
    maximum: 12,
    required: false,
    description: 'The birth month of the character.',
  })
  @Column({ nullable: true })
  birthmonth: number;

  @ApiProperty({
    required: false,
    uniqueItems: true,
    example: 'Monoceros Caeli',
    description: "The name of the character's constellation.",
  })
  @Column({ unique: true, nullable: true })
  constellation: number;

  @ApiProperty({
    required: false,
    description: "The character's description.",
    example: `No. 11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.`,
  })
  @Column({ nullable: true })
  description: string;
}
