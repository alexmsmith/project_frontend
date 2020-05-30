import { Component, OnInit } from '@angular/core';
import { Education } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Array<Education> = [];

  addEducation() {
    this.educations.push({id: 1, education: 'test'});
  }

  // educationSelected = false;
  // addEducation() {
  //   this.educationSelected = true;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
