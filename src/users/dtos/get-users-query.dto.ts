import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUserQueryDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page?: number = 1;
}
