import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() {}

  @Input() content: string
  sections

  // Total number of content within a section. (TODO: counter applied to each section)
  counter = 0;
  // Generate new content for a given section (i.e. Work Experience) in the profile.
  addSectionContent(id, name) {
      this.sections[id]['section-content'][name+''+'-'+this.counter] = 'Example Text';
      this.counter += 1;
  }

  ngOnInit(): void {
    // Load in profile sections upon page load.
    this.sections = [
      {
        'section-id':0,
        'section-name':'Work Experience',
        'section-content':JSON.parse(this.content['work_experience'])
      },
      {
        'section-id':1,
        'section-name':'Academic',
        'section-content':JSON.parse(this.content['academics'])
      },
      {
        'section-id':2,
        'section-name':'Projects',
        'section-content':JSON.parse(this.content['projects'])
      }
    ]
  }

}
