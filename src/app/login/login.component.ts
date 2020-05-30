import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

// const API_URL: string = 'http://localhost:8000/test';
const API_URL = 'http://project-api.ddns.net/api/user/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test = {};

  constructor (private http: HttpClient) {}

  onSubmit(f: NgForm) {
    console.log(f.value.email);
    console.log(f.value.password);
    // console.log(f.valid);
    const email = f.value.email;
    const password = f.value.password;

    // return this.http.get(API_URL);
    this.http.post<any>(API_URL, { email: email, password: password }).subscribe(data => this.test = data);

    //test = this.testService.getData().subscribe(data => this.test = data);
  }

  ngOnInit(): void {
  }

}
