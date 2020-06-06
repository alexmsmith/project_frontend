import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.css']
})
export class SectionContentComponent implements OnInit {

  constructor() {}

  // This value comes from 'section.component.html'.
  @Input() sectionContent: []

  ngOnInit(): void {
  }

}
