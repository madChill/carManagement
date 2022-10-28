import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateCarsDto } from './dto/create-cars.dto';
import { Cars } from '../../entities/cars.entity';
import { IGetQuery, IGetFilter } from '../../utils/dto/getQuery';
import { IGetResult } from '../../utils/dto/resultGet';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
  ) {}

  create(createDto: Cars): Promise<any> {
    // const car = new Cars();
    // car.mode = createDto.mode;
    // user.lastName = createDto.lastName;
    return this.carsRepository.save(createDto);
  }
  put(createDto: Cars): Promise<any> {
    // const car = new Cars();
    // car.mode = createDto.mode;
    // user.lastName = createDto.lastName;
    return this.carsRepository.update({ id: createDto.id }, createDto);
  }
  delete(id: string): Promise<any> {
    // const car = new Cars();
    // car.mode = createDto.mode;
    // user.lastName = createDto.lastName;
    return this.carsRepository.softDelete({ id });
  }

  async findAll(params: IGetFilter<CreateCarsDto>): Promise<IGetResult<Cars>> {
    const [result, total] = await this.carsRepository.findAndCount({
      relations: ['user'],
      skip: params.offset || 0,
      take: params.limit || 10,
      where: {
        ...(params.brand ? { brand: Like('%' + params.brand + '%') } : {}),
        ...(params.build ? { build: Like('%' + params.build + '%') } : {}),
        ...(params.loc ? { loc: Like('%' + params.loc + '%') } : {}),
        ...(params.mode ? { mode: Like('%' + params.mode + '%') } : {}),
        ...(params.available ? { available: params.available } : {}),
        // ...(params.user ? { user: Like('%' + params.mode + '%') } : {}),
      },
    });
    return { data: result, total };
  }

  findOne(id: string): Promise<Cars> {
    return this.carsRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async remove(id: string): Promise<void> {
    await this.carsRepository.delete(id);
  }
}
