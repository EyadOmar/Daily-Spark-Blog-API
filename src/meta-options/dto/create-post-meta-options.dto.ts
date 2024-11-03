import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @ApiProperty()
  @IsJSON()
  @IsNotEmpty()
  metaValue: string;
}
