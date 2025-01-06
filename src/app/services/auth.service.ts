import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  authUser(user: any) {
    let UsersArray = [];
    const registeredUsers = localStorage.getItem('Users');

    if (registeredUsers) {
      UsersArray = JSON.parse(registeredUsers);
    }

    return UsersArray.find(
      (p: any) =>
        p.usersellRent === user.usersellRent && p.password === user.password
    );
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['user/login']);
  }
}
