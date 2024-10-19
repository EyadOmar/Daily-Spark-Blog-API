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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetch a list of registered users or one user if Id is specified',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    example: [
      {
        firstName: 'Eyad',
        lastName: 'Omar',
        email: 'eiad.omar88@gmail.com',
      },
    ],
  })
  getUsers(
    @Param() getUsersParamDto: getUsersParamDto,
    @Query() getUsersQueryDto: GetUserQueryDto,
  ) {
    return this.userService.findAll(
      getUsersParamDto.id,
      getUsersQueryDto.limit,
      getUsersQueryDto.page,
    );
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
