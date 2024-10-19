import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class getUsersParamDto {
  @ApiPropertyOptional({
    description: 'Get user with Id',
    example: '123',
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
