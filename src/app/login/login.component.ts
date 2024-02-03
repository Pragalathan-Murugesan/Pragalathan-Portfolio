import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }


  login() {
    this.authService.login(this.credentials).subscribe(
      response => {
        // Handle login success
        console.log('Login successful', response);
      },
      error => {
        // Handle login failure
        console.error('Login failed', error);
      }
    );
  }

}
