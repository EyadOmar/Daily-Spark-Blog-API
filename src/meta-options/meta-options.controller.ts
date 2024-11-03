import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MetaOptionsService } from './meta-options.service';
import { CreatePostMetaOptionsDto } from './dto/create-post-meta-options.dto';

@Controller('meta-options')
@ApiTags('Meta Options')
export class MetaOptionsController {
  constructor(private readonly metaOptionService: MetaOptionsService) {}

  @ApiOperation({
    summary: 'Add a post meta option json object',
  })
  @ApiResponse({
    status: 201,
    example: {
      metaValue: '{"sideBarIsOn":true}',
      id: 1,
      createDate: '2024-10-26T11:44:29.814Z',
      updateDate: '2024-10-26T11:44:29.814Z',
    },
  })
  @Post()
  async create(@Body() createPostMetaOptionDto: CreatePostMetaOptionsDto) {
    return await this.metaOptionService.create(createPostMetaOptionDto);
  }
}
