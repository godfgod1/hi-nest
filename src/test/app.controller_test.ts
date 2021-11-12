import { Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service_test';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get("/hello")
  // sayHello():string{
  //   return 'Hello everyone'
  // }
  @Get("/hello")
  sayHello():string{
    return this.appService.getHi();
  }

}
