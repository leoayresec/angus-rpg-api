import { Test, TestingModule } from '@nestjs/testing';
import { StereotypeService } from './stereotype.service';

describe('StereotypeService', () => {
  let service: StereotypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StereotypeService],
    }).compile();

    service = module.get<StereotypeService>(StereotypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
