import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import CreateUserDto from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  getHello(): { msg: string } {
    return { msg: 'Hello to users endpoint' };
  }

  async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
    if (newUser) {
      return newUser;
    } else {
      throw new InternalServerErrorException();
    }
  }

  findAll(id: number, limit: number, page: number) {
    console.log(id, page, limit);
    return [
      {
        firstName: 'Eyad',
        lastName: 'Omar',
        email: 'eiad.omar88@gmail.com',
      },
      {
        firstName: 'Eyad',
        lastName: 'Omar',
        email: 'eiad.omar88@gmail.com',
      },
      {
        firstName: 'Eyad',
        lastName: 'Omar',
        email: 'eiad.omar88@gmail.com',
      },
    ];
  }

  findOneById(id: number) {
    console.log(id);
    return {
      firstName: 'Eyad',
      lastName: 'Omar',
      email: 'eiad.omar88@gmail.com',
    };
  }
}
