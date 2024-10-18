import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  getHello(): { msg: string } {
    return { msg: 'Hello to users endpoint' };
  }

  findAll(id: number, limit: number, page: number) {
    console.log(id, page, limit);
    return [
      {
        firstName: 'Eyad',
        lastName: 'Omar',
        email: 'eiad.omar88@gmail.com',
      },
      {
        firstName: 'Eyad',
        lastName: 'Omar',
        email: 'eiad.omar88@gmail.com',
      },
      {
        firstName: 'Eyad',
        lastName: 'Omar',
        email: 'eiad.omar88@gmail.com',
      },
    ];
  }

  findOneById(id: number) {
    console.log(id);
    return {
      firstName: 'Eyad',
      lastName: 'Omar',
      email: 'eiad.omar88@gmail.com',
    };
  }
}
