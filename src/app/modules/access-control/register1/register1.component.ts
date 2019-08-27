import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { LoginModel } from '../login.model';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})
export class Register1Component implements OnInit {
  data: LoginModel;
  message: string;
  action: string;

  constructor(private service: AuthService, private router: Router) {
    this.data = new LoginModel();
    this.message = Constants.DEFAULT_MESSAGE;
    this.action = Constants.DEFAULT_TEXT_ADD_USERS;
  }

  ngOnInit() {
  }

  validateForm(): boolean {
    if (this.data.email && this.data.password) {
      return true;
    }
    return false;
  }

  register() {
    this.action = 'Carregando...';
    this.service.login(this.data).subscribe(
      (response: any) => {
        this.message = Constants.REGISTER_USER_SUCCESSFUL;
        this.action = Constants.DEFAULT_TEXT_ADD_USERS;
        this.saveSessionUser(response.token);
      },
      (error) => {
        this.message = Constants.REGISTER_USER_UNSUCCESSFUL;
        this.action = Constants.DEFAULT_TEXT_ADD_USERS;
        console.error(error);
      }
    );
  }

  private saveSessionUser(token: string) {
    localStorage.setItem(Constants.USER_TOKEN, token);
  }

}
