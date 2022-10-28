import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from '../../entities/users.entity';
import { IGetQuery, IGetFilter } from '../../utils/dto/getQuery';
import { IGetResult } from '../../utils/dto/resultGet';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  create(createUserDto: Users): Promise<Users> {
    return this.usersRepository.save(createUserDto);
  }

  async findAll(params: IGetFilter<CreateUserDto>): Promise<IGetResult<Users>> {
    const [result, total] = await this.usersRepository.findAndCount({
      skip: params.offset || 0,
      take: params.limit || 10,
      where: {
        ...(params.firstName
          ? { firstName: Like('%' + params.firstName + '%') }
          : {}),
        ...(params.lastName
          ? { lastName: Like('%' + params.lastName + '%') }
          : {}),
        ...(params.role ? { role: Like('%' + params.role + '%') } : {}),
      },
    });
    return { data: result, total };
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  put(createDto: Users): Promise<any> {
    // const car = new Cars();
    // car.mode = createDto.mode;
    // user.lastName = createDto.lastName;
    return this.usersRepository.update({ id: createDto.id }, createDto);
  }
}
