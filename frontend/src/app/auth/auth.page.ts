import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  username: string;
  password: string;
  isLogin: boolean = true;
  isLoading: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
    .create({ keyboardClose : true, message: 'Logging in..'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/rooms');
      }, 1500);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.username;
    const password = form.value.password;

    if (this.isLogin) {
      this.onLogin();
      form.reset();
    }
    else {
      //TODO: logica sign up
    }
  }
}
