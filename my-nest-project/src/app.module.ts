import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Lab1KyyashchukModule } from './lab1-kyyashchuk/lab1-kyyashchuk.module';

@Module({
  imports: [Lab1KyyashchukModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
