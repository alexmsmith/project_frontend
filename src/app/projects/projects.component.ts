import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = 'A kitchen operations platform to be used by our clients which is built using the Laravel MVC Framework, integrating the use of Eloquent and Migrations.';

  constructor() { }

  ngOnInit(): void {
  }

}
