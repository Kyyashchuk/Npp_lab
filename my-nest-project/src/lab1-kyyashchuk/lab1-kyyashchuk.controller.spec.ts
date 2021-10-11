import { Test, TestingModule } from '@nestjs/testing';
import { Lab1KyyashchukController } from './lab1-kyyashchuk.controller';

describe('Lab1KyyashchukController', () => {
  let controller: Lab1KyyashchukController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lab1KyyashchukController],
    }).compile();

    controller = module.get<Lab1KyyashchukController>(Lab1KyyashchukController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
