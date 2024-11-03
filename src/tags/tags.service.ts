import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { In, Repository } from 'typeorm';
import { CreateTagDto } from './dtos/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}
  async findAll() {
    return await this.tagsRepository.find();
  }
  async create(createTagDto: CreateTagDto) {
    let tag = this.tagsRepository.create(createTagDto);
    tag = await this.tagsRepository.save(tag);
    return tag;
  }
  async findMultiple(ids: number[]) {
    return await this.tagsRepository.find({
      where: {
        id: In(ids),
      },
    });
  }
}
