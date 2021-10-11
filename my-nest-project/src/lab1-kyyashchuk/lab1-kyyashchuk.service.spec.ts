import { Test, TestingModule } from '@nestjs/testing';
import { Lab1KyyashchukService } from './lab1-kyyashchuk.service';

describe('Lab1KyyashchukService', () => {
  let service: Lab1KyyashchukService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lab1KyyashchukService],
    }).compile();

    service = module.get<Lab1KyyashchukService>(Lab1KyyashchukService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
