import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor (private authService: AuthService) {}

  user = JSON.parse(localStorage.getItem('user'));
  name = this.user.name;

  // sections = ['Work Experience', 'Academic', 'Projects'];

  // Demo Fetch Data.
  fetch() {
    this.authService.fetch()
      // .subscribe( data => console.log(data) );
      .subscribe (
        (data) => {
          console.log(data);
        }
      )
  }

  ngOnInit(): void {}

}
