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

  user_id = this.user['id'];
  profile_data;

  ngOnInit(): void {
    this.authService.fetch(this.user_id)
      .subscribe (data => this.profile_data = data)
  }

}
