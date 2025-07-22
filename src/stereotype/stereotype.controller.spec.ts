import { Test, TestingModule } from '@nestjs/testing';
import { StereotypeController } from './stereotype.controller';
import { StereotypeService } from './stereotype.service';

describe('StereotypeController', () => {
  let controller: StereotypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StereotypeController],
      providers: [StereotypeService],
    }).compile();

    controller = module.get<StereotypeController>(StereotypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
