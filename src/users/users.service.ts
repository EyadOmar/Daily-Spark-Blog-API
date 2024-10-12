import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): { msg: string } {
    return { msg: 'Hello to users endpoint' };
  }
}
