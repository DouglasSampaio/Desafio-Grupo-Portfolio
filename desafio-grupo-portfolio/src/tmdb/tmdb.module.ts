import { Module } from '@nestjs/common';
import { TmdbController } from './tmdb.controller';
import { TmdbService } from './shared/tmdb.service/tmdb.service';

@Module({
  controllers: [TmdbController],
  providers: [TmdbService]
})
export class TmdbModule {}
