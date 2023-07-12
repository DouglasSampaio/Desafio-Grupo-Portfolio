import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/movies';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

}
