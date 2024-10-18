import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  login(loginDto: LoginDto) {
    console.log(loginDto);
    return 'heeloo';
  }
}
