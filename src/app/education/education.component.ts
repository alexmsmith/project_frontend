import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education = "Machine Learning and Predictive Analytics, Big Data, Digital Design and Development, Project Management, Software Development Group Project, Information Security, IT Strategy and Governance. As a Student Representative for MSc IT, I support the Student’s wellbeing, helping and guiding them along their studies.";

  constructor() { }

  ngOnInit(): void {
  }

}
