import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTagDto } from './dtos/create-tag.dto';

@Controller('tags')
@ApiTags('Tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @Get()
  @ApiResponse({
    status: 200,
    example: [
      {
        id: 1,
        name: 'Javascript',
        slug: 'js',
        description: 'JS',
        schema: null,
        featuredImageUrl: null,
        createDate: '2024-10-26T20:43:18.945Z',
        updateDate: '2024-10-26T20:43:18.945Z',
        deletedAt: null,
      },
    ],
  })
  async getAll() {
    return await this.tagsService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 201,
    example: {
      name: 'Javascript',
      slug: 'js',
      description: 'JS',
      schema: null,
      featuredImageUrl: null,
      id: 1,
      createDate: '2024-10-26T20:43:18.945Z',
      updateDate: '2024-10-26T20:43:18.945Z',
      deletedAt: null,
    },
  })
  async create(@Body() createTagDto: CreateTagDto) {
    return await this.tagsService.create(createTagDto);
  }
}
