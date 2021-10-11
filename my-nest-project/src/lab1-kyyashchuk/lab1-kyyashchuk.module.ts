import { Module } from '@nestjs/common';
import { Lab1KyyashchukController } from './lab1-kyyashchuk.controller';
import { Lab1KyyashchukService } from './lab1-kyyashchuk.service';

@Module({
  controllers: [Lab1KyyashchukController],
  providers: [Lab1KyyashchukService]
})
export class Lab1KyyashchukModule {}
