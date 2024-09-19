import { Test, TestingModule } from '@nestjs/testing';
import { VoosController } from './voos.controller';
import { VoosService } from './voos.service';

describe('VoosController', () => {
  let controller: VoosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoosController],
      providers: [VoosService],
    }).compile();

    controller = module.get<VoosController>(VoosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
