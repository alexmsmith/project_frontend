import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { TestService } from '../test.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private testService: TestService) {}
  test = {};

  loadData() {
    this.testService.getData().subscribe(data => this.test = data);
  }
  

  // getHeroes(): void {
  //   this.data = this.testService.getData();
  // }

  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  //   powers: 'Ability to control the weather'
  // };

  // The parameter simultanously defines a private testService
  // property and identifies it as a TestService Injection site.
  

  ngOnInit(): void {
  }

}