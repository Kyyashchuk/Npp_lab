import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): number | string {

    return '<style>div {width: 550px; height: 30px; margin: 25px; border: 3px dotted #666;padding: 20px; background: #EBCFFD}</style><div><b><i><small>getHello(): </small></i></b>&emsp;' + this.appService.getHello()+'</div>';
  }
}
