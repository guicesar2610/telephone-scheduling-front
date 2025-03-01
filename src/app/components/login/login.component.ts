import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem('token_phone_scheduling');
  }

  onClick() {
    const token = Math.random().toString(36).substr(2) + Date.now().toString(36);
    localStorage.setItem('token_phone_scheduling', token);
    this.router.navigate(['']);
  }
}
