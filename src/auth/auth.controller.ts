import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  login(@Query() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
