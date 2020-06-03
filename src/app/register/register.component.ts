import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  createUser(f: NgForm) {
    this.authService.register(f.value.name, f.value.email, f.value.password)
      .subscribe(
        // (newRegisterAttempt) => {
        () => {
          // console.log(newRegisterAttempt);
          // localStorage.setItem('auth_token', newRegisterAttempt.access_tocken);
          // Re-redirect to user's profile upon successful register.
          this.router.navigate(['/profile']);
        }
      )

  }

  ngOnInit(): void {
  }

}
