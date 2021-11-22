import { Controller, Get } from '@nestjs/common';
import { AppService, Books } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Books {

    return this.appService.getHello();
  }
}
