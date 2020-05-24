import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://data.police.uk/api/forces/leicestershire');
  }
}
