import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor (private authService: AuthService) {}

  // Demo Fetch Data.
  fetch() {
    // this.authService.fetch(localStorage.getItem('auth_token'))
    this.authService.fetch(localStorage.getItem('auth_token'))
      // .subscribe( data => console.log(data) );
      .subscribe (
        (data) => {
          console.log(data);
        }
      )
  }

  ngOnInit(): void {}

}
