import { Controller, Get } from '@nestjs/common';
//import { TmdbService } from './shared/tmdb.service/tmdb.service';
import { Tmdb } from './shared/tmdb/tmdb';

import TmdbService from './shared/tmdb.service/tmdb.service';

async function getPopularMovies(): Promise<any> {
  const popularMovies = await TmdbService.getPopularMovies();
  console.log(popularMovies);
}
//getPopularMovies()

@Controller('tmdb')
export class TmdbController {
    @Get()
    async getAll() : Promise<Tmdb[]>{
        return getPopularMovies();
    }
    // constructor(
    //     private tmdbService
    // ){ }

//     @Get()
//    async getAll() : Promise<Tmdb[]> {
//         return getPopularMovies();
//     }
}
