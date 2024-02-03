import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: any = {};

  formdata = {name:"",password:""}
  constructor(private authService: AuthService) {}


  ngOnInit(): void {
  }

  // signUp() {
  //   this.authService.signUp(this.user).subscribe({
  //     next: (response) => {
  //       // Handle signup success
  //       console.log('Signup successful', response);
  //     },
  //     error: (error) => {
  //       // Handle signup failure
  //       console.error('Signup failed', error);
  //     }
  //   });

  // }


}
