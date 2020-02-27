import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  public name: string = '';
  public password: string = '';

  constructor(private router: Router) { }

  public updateName(name: string): void {
    this.name = name;
  }

  public updatePassword(password: string): void {
    this.password = password;
  }

  public auth(e: Event): void {
    e.preventDefault();
    if (this.name && this.password) {
      localStorage.setItem('login', this.name);
      this.router.navigate(['/']);
    }
  }
}
