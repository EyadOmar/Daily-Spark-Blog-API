import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule, PostsModule],
})
export class AppModule {}
