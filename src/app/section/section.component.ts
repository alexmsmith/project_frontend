import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  sectionContent = {};
  sectionContentObj = {};

  // Hard coded sections that will need to come from the database at some point.
  sections = [
    {
      'section-id':0,
      'section-name':'Work Experience',
      'section-content': {
        'Weston Analytics':'Following the SCRUM framework of releasing software. Developer submissions would go into code-review, followed by a quality assurance step. Both Jira and SourceTree simplified the entire process from start to finish. SCRUM meetings are set up every morning to discuss the current sprint tasks and how we are approaching the issues and challenges.',
        'content':'Other things',
        'other':'Whatjadsksad'
      }
    },
    {
      'section-id':1,
      'section-name':'Academic',
      'section-content': {
        'Bristol UWE':'Machine Learning and Predictive Analytics, Big Data, Digital Design and Development, Project Management, Software Development Group Project, Information Security, IT Strategy and Governance.',
        'content':'Other things',
        'other':'Whatjadsksad'
      }
    },
    {
      'section-id':2,
      'section-name':'Projects',
      'section-content': {
        'Weston Analytics':'Following the SCRUM framework of releasing software. Developer submissions would go into code-review, followed by a quality assurance step. Both Jira and SourceTree simplified the entire process from start to finish. SCRUM meetings are set up every morning to discuss the current sprint tasks and how we are approaching the issues and challenges.',
      }
    },
  ];

  // Total number of content within a section.
  counter = 0;
  // Generate new content for a given section (i.e. Work Experience) in the profile.
  addSectionContent(id, name) {
      this.sections[id]['section-content'][name+''+'-'+this.counter] = 'Example Text';
      this.counter += 1;
  }

  ngOnInit(): void {
  }

}
