import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { LoginModel } from '../login.model';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: LoginModel;
  message: string;
  action: string;

  private readonly DEFAULT_MESSAGE = 'Preencha todos os campos antes de enviar!';
  private readonly DEFAULT_ACTION = 'Enviar';

  constructor(private loginService: AuthService, private router: Router) {
    this.data = new LoginModel();
    this.action = this.DEFAULT_ACTION;
    this.message = this.DEFAULT_MESSAGE;
  }

  ngOnInit() {
  }

  isValid() {
    return this.data.email && this.data.password;
  }

  async loginWithPromise() {
    this.action = 'Enviando...';
    try {
      const response: any = await this.loginService.login(this.data).toPromise();
      console.log(response);
      this.saveSessionUser(response.token);
      this.message = '';
    } catch (error) {
      console.error(error);
      this.message = 'Ocorreu um erro ao enviar, tente novamente mais tarde';
    } finally {
      console.log('request completed!');
      this.action = this.DEFAULT_ACTION;
    }
  }

  send() {
    this.loginService.login(this.data).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }

  private saveSessionUser(token: string) {
    localStorage.setItem(Constants.USER_TOKEN, token);
  }

}
