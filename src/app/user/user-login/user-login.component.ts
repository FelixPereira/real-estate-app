import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm) {
    const token = this.authService.authUser(loginForm.form.value);

    if (token) {
      this.alertify.success('You are logged in');
      localStorage.setItem('token', token.user);
      this.router.navigate(['/']);
      loginForm.reset();
    } else {
      this.alertify.error('Invalid credentials');
    }
  }
}
