import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-posts.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    example: [
      {
        id: 6,
        title: 'post2',
        postType: 'post',
        slug: 'post-2',
        status: 'draft',
        content: 'post 2',
        featuredImageUrl: null,
        publishOn: '2024-03-16T07:46:32.000Z',
        metaOptions: {
          id: 8,
          metaValue: '{"favorite":true}',
          createDate: '2024-10-26T18:37:29.483Z',
          updateDate: '2024-10-26T18:37:29.483Z',
        },
      },
    ],
  })
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get('/user/:userId')
  getUserPosts(@Param('userId') userId: string) {
    return this.postsService.findUserPosts(userId);
  }

  @Get(':postId')
  @ApiResponse({
    status: 200,
    example: {
      id: 6,
      title: 'post2',
      postType: 'post',
      slug: 'post-2',
      status: 'draft',
      content: 'post 2',
      featuredImageUrl: null,
      publishOn: '2024-03-16T07:46:32.000Z',
      metaOptions: {
        id: 8,
        metaValue: '{"favorite":true}',
        createDate: '2024-10-26T18:37:29.483Z',
        updateDate: '2024-10-26T18:37:29.483Z',
      },
    },
  })
  async getPost(@Param('postId') postId: number) {
    return this.postsService.findOne(postId);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a post',
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
    example: {
      title: 'new post',
      postType: 'post',
      slug: 'this-is-my-new-post',
      status: 'draft',
      content: 'this is my new post',
      publishOn: '2024-03-16T07:46:32+0000',
      metaOptions: {
        metaValue: '{"sidebarEnabled":true}',
        id: 7,
        createDate: '2024-10-26T12:10:58.092Z',
        updateDate: '2024-10-26T12:10:58.092Z',
      },
      featuredImageUrl: null,
      id: 5,
    },
  })
  async createPost(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.createPost(createPostDto);
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

  @Delete(':postId')
  @ApiResponse({
    status: 200,
    example: {
      raw: [],
      affected: 1,
    },
  })
  async deletePost(@Param('postId') postId: string) {
    return await this.postsService.remove(postId);
  }
}
