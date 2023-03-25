import { ApiProperty } from '@nestjs/swagger';

export class CreateCharacterDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
