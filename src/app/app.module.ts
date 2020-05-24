import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
// Contains both the education and workexperience component.
import { ContainerComponent } from './container/container.component';
import { EducationComponent } from './education/education.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { ProjectsComponent } from './projects/projects.component';
import { LogoComponent } from './logo/logo.component';

import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    ContainerComponent,
    EducationComponent,
    WorkexperienceComponent,
    ProjectsComponent,
    LogoComponent,
    HeroesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
