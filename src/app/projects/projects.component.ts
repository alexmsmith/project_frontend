import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // projects = 'A kitchen operations platform to be used by our clients which is built using the Laravel MVC Framework, integrating the use of Eloquent and Migrations.';
  projects: Array<Project> = [];

  addProject() {
    this.projects.push({id: 1, project: 'test'});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
