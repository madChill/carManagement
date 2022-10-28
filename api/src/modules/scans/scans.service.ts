import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateScansResultDto } from './dto/create-scans.dto';
import { ScansResult } from '../../entities/scans.entity';
import { IGetQuery } from '../../utils/dto/getQuery';
import { IGetResult } from '../../utils/dto/resultGet';

@Injectable()
export class CreateScansResultDtoService {
  constructor(
    @InjectRepository(ScansResult)
    private readonly scansRepository: Repository<ScansResult>,
  ) {}

  create(createDto: CreateScansResultDto): Promise<ScansResult> {
    // const user = new ScansResult();
    // user.Status = createDto.Status;
    // user.lastName = createDto.lastName;
    return this.scansRepository.save(createDto);
  }

  async findAll(params: IGetQuery): Promise<IGetResult<ScansResult>> {
    const [result, total] = await this.scansRepository.findAndCount({
      skip: params.offset || 0,
      take: params.limit || 10,
      where: params?.search
        ? {
            RepositoryName: Like('%' + params.search + '%'),
          }
        : {},
    });
    return { data: result, total };
  }

  findOne(id: string): Promise<ScansResult> {
    return this.scansRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.scansRepository.delete(id);
  }
}
