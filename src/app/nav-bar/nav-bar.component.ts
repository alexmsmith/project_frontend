import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  // Logout Function
  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          localStorage.removeItem('auth_token');
          // Re-direct to the login screen.
          this.router.navigate(['/login']);
        }
      )
  }

  ngOnInit(): void {
  }

}
