import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CreateScansResultDtoService } from './scans.service';
import { CreateScansResultDto } from './dto/create-scans.dto';
import { ScansResult } from '../../entities/scans.entity';
import { IGetQuery } from '../../utils/dto/getQuery';
import { IGetResult } from '../../utils/dto/resultGet';

@Controller('scans')
export class ScansResultController {
  constructor(
    private readonly scansResultService: CreateScansResultDtoService,
  ) {}
  @Post()
  create(@Body() createDto: CreateScansResultDto): Promise<ScansResult> {
    return this.scansResultService.create(createDto);
  }

  @Get()
  findAll(@Query() params: IGetQuery): Promise<IGetResult<ScansResult>> {
    return this.scansResultService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): Promise<ScansResult> {
    return this.scansResultService.findOne(id);
  }
}
