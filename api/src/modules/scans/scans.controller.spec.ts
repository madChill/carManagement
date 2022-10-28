import { Test, TestingModule } from '@nestjs/testing';
import { ScansResultController } from './scans.controller';
import { ScansResult } from '../../entities/scans.entity';
import { CreateScansResultDtoService } from './scans.service';
import { ScansResultModule } from './scans.module';

export const repositoryMockFactory = jest.fn(() => ({
  create: jest.fn((entity) => entity),
  findOne: jest.fn((entity) => ({ Status: 'success' })),
  findAll: jest.fn((entity) => ({
    data: [],
    total: 1,
  })),
  // ...
}));
describe('ScanController', () => {
  let controller: ScansResultController;
  let service: CreateScansResultDtoService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [ScansResultModule],
      controllers: [ScansResultController],
      providers: [
        {
          provide: CreateScansResultDtoService,
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = module.get<ScansResultController>(ScansResultController);
    service = module.get<CreateScansResultDtoService>(
      CreateScansResultDtoService,
    );
  });

  describe('findAll', () => {
    it('should return an array of scans', async () => {
      const result = {
        data: [],
        total: 1,
      };
      const result1 = await controller.findAll({});
      console.log(result1);
      expect(result1).toStrictEqual(result);
    });
  });
  describe('findOne', () => {
    it('should return an array of scans', async () => {
      const result1 = await controller.findOne('');
      console.log(result1);
      expect(result1).toStrictEqual({ Status: 'success' });
    });
  });
});
