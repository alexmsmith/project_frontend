import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private authService: AuthService, private router: Router) {}

  // Login Form Submit.
  onSubmit(f: NgForm) {
    this.authService.login(f.value.email, f.value.password)
      .subscribe(
        (newLoginAttempt) => {
          console.log(newLoginAttempt);
          localStorage.setItem('auth_token', newLoginAttempt.access_tocken);
          // Re-direct to user's profile upon successful login.
          this.router.navigate(['/profile']);
        }
      );
  }

  ngOnInit(): void {
  }

}
