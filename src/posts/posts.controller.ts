import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-posts.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':userId')
  getUserPosts(@Param() userId: string) {
    return this.postsService.findUserPosts(userId);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a post',
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
    example: {
      id: '123',
      title: 'Title 1',
      postType: 'post',
      slug: 'my-blog-post',
      status: 'draft',
      content: 'Content of post 1',
      featuredImageUrl: 'http://localhost:3000/images/image1.jpg',
      publishedOn: '2024-10-19T13:10:48.430Z',
      tags: ['nestjs', 'typescript'],
      metaOptions: [
        {
          key: 'sidebarEnabled',
          value: false,
        },
      ],
    },
  })
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @Patch()
  @ApiOperation({
    summary: 'Edit a post',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    example: {
      id: '123',
      title: 'Title 1',
      postType: 'post',
      slug: 'my-blog-post',
      status: 'draft',
      content: 'Content of post 1',
      featuredImageUrl: 'http://localhost:3000/images/image1.jpg',
      publishedOn: '2024-10-19T13:10:48.430Z',
      tags: ['nestjs', 'typescript'],
      metaOptions: [
        {
          key: 'sidebarEnabled',
          value: false,
        },
      ],
    },
  })
  editPost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.editPost(patchPostDto);
  }
}
