import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Login, LoginResponse } from './interfaces/login';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  // API path
  path = 'http://localhost:4000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) {}

  async getTweets() {
    return this.http.get<any>(`${this.path}/tweets`).toPromise();
  }

  async getUsers() {
    return this.http.get<any>(`${this.path}/users`).toPromise();
  }

  async editTweet(token: string, body: any, userId: string) {
    const headerOptions = this.httpOptions.headers.append('Authorization', `Bearer ${token}`);
    return this.http.put<string>(`${this.path}/tweets/${userId}`, body, {
      headers: headerOptions
    }).toPromise();
  }

  async createTweet(token: string, body: any, userId: string) {
    const headerOptions = this.httpOptions.headers.append('Authorization', `Bearer ${token}`);
    return this.http.post<string>(`${this.path}/tweets/`, body, {
      headers: headerOptions
    }).toPromise();
  }

  async login(body: Login) {
    return this.http.post<LoginResponse>(`${this.path}/login`, body, this.httpOptions).toPromise();
  }

  async me(token: string) {
    const headerOptions = this.httpOptions.headers.append('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.path}/me`, {
      headers: headerOptions
    }).toPromise();
  }

  async createUser(body: User) {
    return this.http.post<User>(`${this.path}/users`, body, this.httpOptions).toPromise();
  }

}
