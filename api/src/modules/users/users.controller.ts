import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Query,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from '../../entities/users.entity';
import { UsersService } from './users.service';
import { IGetQuery, IGetFilter } from '../../utils/dto/getQuery';
import { IGetResult } from '../../utils/dto/resultGet';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: Users): Promise<Users> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(
    @Query() params: IGetFilter<CreateUserDto>,
  ): Promise<IGetResult<Users>> {
    return this.usersService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
  @Put()
  update(@Body() createDto: Users): Promise<Users> {
    return this.usersService.put(createDto);
  }
}
