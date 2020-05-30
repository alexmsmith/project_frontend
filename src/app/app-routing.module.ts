import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

// Routes tell the Router which view to display when a user clicks
// a link.
const routes: Routes = [
  // Path to register page component
  { path: 'register', component: RegisterComponent},
  // Path to login page component
  { path: 'login', component: LoginComponent },
  // Path to the user's profile
  { path: 'profile', component: ProfileComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
