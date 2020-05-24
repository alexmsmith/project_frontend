import { Component, OnInit } from '@angular/core';
import { Bio } from '../bio';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  bio: Bio = {
    id: 1,
    name: 'Alexander Michael Smith',
    bio: 'An individual developing in-house projects using innovative web-technologies; furthering my capabilities as a developer. Studying a Master of Science degree in Information Technology at the University of the West of England in Bristol part-time.'
  };

  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  nameSelected = false;
  onSelect() {
    // Load up modal to update the content.
    this.nameSelected = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
