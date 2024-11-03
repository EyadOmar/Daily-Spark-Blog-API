import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from './dto/create-post-meta-options.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
  ) {}

  async create(createPostMetaOptionDto: CreatePostMetaOptionsDto) {
    let metaOption = this.metaOptionRepository.create(createPostMetaOptionDto);
    metaOption = await this.metaOptionRepository.save(metaOption);
    return metaOption;
  }
}
