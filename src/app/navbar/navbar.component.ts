import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedinUser!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loggedin() {
    const token = localStorage.getItem('token');

    if (!token) return;

    this.loggedinUser = token;
    return this.loggedinUser;
  }

  onLogout() {
    this.authService.logOut();
  }
}
