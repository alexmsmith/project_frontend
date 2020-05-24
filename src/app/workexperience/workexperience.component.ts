import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {

  workexperience = 'In-depth discussions on the future of Weston Analytics and the services they provide. Converting to a commercialised business structure rather than providing software purely within the company.';

  constructor() { }

  ngOnInit(): void {
  }

}
