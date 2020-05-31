import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://project-api.ddns.net/api/user/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  token = localStorage.getItem('auth_token');
  fetch(token: string) {
    // return this.http.post<any>('http://project-api.ddns.net/api/user/get', { token });
    return this.http.get('http://project-api.ddns.net/api/user/get');
  }

  login(email:string, password:string) {
    return this.http.post<any>(API_URL, { email, password });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');

    // Check whether the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  // getData(): Observable<Post[]> {
  //   return this.http.get<Post[]>(POLICE_API);
  // }

  // // login(email:string, password:string) {
  // login(user: {email : string, password: string}): Observable<boolean> {
  //   return this.http.post<any>(API_URL, user)
  //     .pipe(
  //       tap(tokens => this.doLoginUser(user.email, tokens)),
  //       mapTo(true),
  //       catchError(error => {
  //         alert(error.error);
  //         return of(false);
  //       }));
  //   // .shareReplay();
  // }

  // logout() {
  //   return this.http.post<any>(LOGOUT_API_URL, {
  //     'refreshToken': this.getRefreshToken()
  //   }).pipe(
  //     tap(() => this.doLogoutUser()),
  //     // Map to true, so the client knows that the logout was successful.
  //     mapTo(true),
  //     catchError(error => {
  //       alert(error.error);
  //       return of(false);
  //     }));
  // }

  // isLoggedIn() {

  // }

  // private doLoginUser(email: string, tokens: Tokens) {
  //   this.loggedUser = email;
  //   this.storeTokens(tokens);
  // }

  // private doLogoutUser() {
  //   this.loggedUser = null;
  //   this.removeTokens();
  // }

  // private storeTokens(tokens: Tokens) {
  //   localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
  //   localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  // }
}
