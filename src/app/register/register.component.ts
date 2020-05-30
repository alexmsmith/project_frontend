import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

// const API_URL = 'http://localhost:8000/registeredUsers';
const API_URL = 'http://project-api.ddns.net/api/user/create';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  test = {};

  constructor(private http: HttpClient) {}

  createUser(f: NgForm) {
    const name = f.value.name;
    const email = f.value.email;
    const password = f.value.password;

    console.log(f);

    // Post request to create user api.
    this.http.post<any>(API_URL, { name: name, email: email, password: password }).subscribe(data => this.test = data);
  }

  ngOnInit(): void {
  }

}
