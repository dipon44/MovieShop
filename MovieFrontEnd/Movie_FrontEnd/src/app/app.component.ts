import { provideCloudflareLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.moviesInTheather= [{
      title: 'Spider-Man',
      realeaseDate: new Date(),
      price: 50.9
    },
    {
      title: 'Bat-Man',
      realeaseDate: new Date(),
      price: 60.5
    },
    {
      title: 'Super-Man',
      realeaseDate: new Date(),
      price: 70.9
    }];

    // this.moviesFutureRelease[];
    this.moviesFutureRelease=[{
      title: 'Fast & Furious 7',
      realeaseDate: new Date(), 
      price: 50.9
    },
    {
      title: 'Fast & Furious 8',
      realeaseDate: new Date(),
      price: 60.5
    },
    {
      title: 'Fast & furious 9',
      realeaseDate: new Date(),
      price: 70.9
    }
    ];
  }
  

  moviesInTheather :any;
  moviesFutureRelease :any;
  title = "any value";

  doubleNumber(n: number){
    return n*2;
  }

  tripleNumber(m: number){
    return m*3;
  }
}