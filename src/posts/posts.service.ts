import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  findAll() {
    return [
      {
        title: 'Post 1',
        content: 'Post 1 content',
      },
    ];
  }

  findUserPosts(userId: string) {
    const user = this.usersService.findOneById(+userId);
    if (user) {
      return [
        {
          title: 'Post 1',
          content: 'Post 1 content',
        },
        {
          title: 'Post 1',
          content: 'Post 1 content',
        },
      ];
    }
  }
}
