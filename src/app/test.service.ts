import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HttpClient, HttpResponse, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

const API_URL: string = 'http://localhost:8000/test';
// const API_URL: string = 'http://project-api.ddns.net/api/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(API_URL);
  }
}
