import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModel } from './login.model';
import { Constants } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: LoginModel) {
    return this.http.post(`https://reqres.in/api/login`, data);
  }

  register(data: LoginModel) {
    return this.http.post(`${Constants.BASE_URL}/register`, data);
  }

  getTokenStorage(): boolean {
    const token = localStorage.getItem(Constants.USER_TOKEN);

    if (!token) {
      return false;
    }

    return true;
  }

  getToken(): string {
    if (this.getTokenStorage()) {
      return localStorage.getItem(Constants.USER_TOKEN);
    }
  }
}
