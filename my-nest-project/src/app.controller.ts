import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return '<b><i><small>getNumbers(): </small></i></b>&emsp;' + this.appService.getNumbers() + '<br>' + '<b><i><small>getString(): </small></i></b>&emsp;' +  this.appService.getString() + '<br>' + '<b><i><small>getArrays(): </small></i></b>&emsp;' +  this.appService.getArrays() + '<br>' + '<b><i><small>getEnums(): </small></i></b>&emsp;' +  this.appService.getEnums() + '<br>' + '<b><i><small>getMultitypeArrays(): </small></i></b>&emsp;' +  this.appService.getMultitypeArrays() + '<br>' + '<b><i><small>getMultitypeValues(): </small></i></b>&emsp;' +  this.appService.getMultitypeValues();
  }
}
