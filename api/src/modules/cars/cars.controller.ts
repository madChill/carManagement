import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  ParseIntPipe,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarsDto } from './dto/create-cars.dto';
import { Cars } from '../../entities/cars.entity';
import { IGetResult } from '../../utils/dto/resultGet';
import { IGetQuery, IGetFilter } from '../../utils/dto/getQuery';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Post()
  create(@Body() createDto: Cars): Promise<Cars> {
    return this.carsService.create(createDto);
  }
  @Put()
  update(@Body() createDto: Cars): Promise<Cars> {
    return this.carsService.put(createDto);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: string): Promise<Cars> {
    return this.carsService.delete(id);
  }
  @Get()
  findAll(
    @Query() params: IGetFilter<CreateCarsDto>,
  ): Promise<IGetResult<Cars>> {
    return this.carsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): Promise<Cars> {
    return this.carsService.findOne(id);
  }
}
