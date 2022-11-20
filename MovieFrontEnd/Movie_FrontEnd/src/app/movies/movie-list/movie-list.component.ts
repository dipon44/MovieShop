import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @Input()
  movies: any;
 // movies: { title: string; realeaseDate: Date; price: number; }[];
  remove(index:number){
    this.movies.splice(index, 1);
      
  }
}
