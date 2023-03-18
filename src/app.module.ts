import { Module } from '@nestjs/common';

import * as fs from 'fs';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { CharacterModule } from './characters/characters.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CharacterModule,
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      host: 'greyed-gorgon-2471.7s5.cockroachlabs.cloud',
      port: 26257,
      username: 'agrim',
      password: 'vZTtBOCbZjd4zkeJ_zI05A',
      database: 'genshindb',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
        ca: fs
          .readFileSync(`${process.env.APPDATA}\\postgresql\\root.crt`)
          .toString(),
      },
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
  ],
})
export class AppModule {}
