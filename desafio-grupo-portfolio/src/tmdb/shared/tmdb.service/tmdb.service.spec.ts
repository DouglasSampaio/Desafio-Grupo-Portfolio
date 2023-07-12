import { Test, TestingModule } from '@nestjs/testing';
import { TmdbService } from './tmdb.service';

describe('TmdbService', () => {
  let provider: TmdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TmdbService],
    }).compile();

    provider = module.get<TmdbService>(TmdbService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
