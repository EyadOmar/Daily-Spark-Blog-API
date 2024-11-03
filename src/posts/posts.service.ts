import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-posts.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/tags.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
  ) {}
  async findAll() {
    return await this.postsRepository.find();
  }

  async findOne(postId: number) {
    return await this.postsRepository.findOne({
      where: {
        id: postId,
      },
    });
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

  async createPost(createPostDto: CreatePostDto) {
    const author = await this.usersService.findOneById(createPostDto.authorId);
    const tags = await this.tagsService.findMultiple(createPostDto.tags);
    let post = this.postsRepository.create({ ...createPostDto, author, tags });
    post = await this.postsRepository.save(post);
    return post;
  }

  editPost(patchPostDto: PatchPostDto) {
    return patchPostDto;
  }

  async remove(postId: string) {
    return await this.postsRepository.delete(+postId);
  }
}
