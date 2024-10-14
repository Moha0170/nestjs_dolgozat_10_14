import { Controller, Get, Param, Query, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      
    }
  }

  @Get('keszRendeles')
  @Render('keszRendeles')
  keszRendeles(
    @Query('nev') nev: string,
    @Query('email') email: string,
    @Query('datum') datum: Date,
    @Query('ulohely') ulohely: number,
  ) {
    var uzenet = "Hibás adatok!"
    const currentDate = new Date();
    if (ulohely >= 1 && ulohely <= 10) {
      uzenet = "Sikeres rendelés!"
      return {
        uzenet
      }
    } else {
      uzenet = "Hibás adatok!"
      return {
        uzenet
      };
    }
  }
}