import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
// import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Post('signup')
  // signup(@Req() req: Request) {
  //   console.log('Request Body => ', req.body);
  //   return this.authService.signup();
  // }
  // @HttpCode(200)
  // @HttpCode(HttpStatus.OK)
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
