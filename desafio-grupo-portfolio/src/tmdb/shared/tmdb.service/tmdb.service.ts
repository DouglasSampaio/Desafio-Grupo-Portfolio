import { Injectable } from '@nestjs/common';

import axios from 'axios';

const API_KEY = 'cebc351a21dd050371fcd72eb2df45a0';
const TMDB_API_ENDPOINT = 'https://api.themoviedb.org/3';

async function getPopularMovies(): Promise<any> {
    const url = `${TMDB_API_ENDPOINT}/movie/popular?api_key=${API_KEY}&language=pt-BR&region=BR`;
    const response = await axios.get(url);
    return response.data.results;
}

export default { getPopularMovies };
@Injectable()
export class TmdbService { 

    getAll(){
        getPopularMovies()
    }
    
}
