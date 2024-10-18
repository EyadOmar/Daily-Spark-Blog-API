import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dtos/create-user.dto';
import { getUsersParamDto } from './dtos/get-users-param.dto';
import { GetUserQueryDto } from './dtos/get-users-query.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:id?')
  getUsers(
    @Param() getUsersParamDto: getUsersParamDto,
    @Query() getUsersQueryDto: GetUserQueryDto,
  ) {
    console.log(
      typeof getUsersParamDto.id,
      typeof getUsersQueryDto.limit,
      typeof getUsersQueryDto.page,
    );
    return this.userService.getHello();
  }

  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.getHello();
  }

  @Patch()
  patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return this.userService.getHello();
  }
}
