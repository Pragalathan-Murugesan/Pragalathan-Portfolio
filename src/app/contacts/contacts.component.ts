import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.emailmasking(this.Email);
  }
  Email:any="";
  emailmasking(_email: any) {
    if(_email){
      _email = _email.split("");
      let finalArray:any ="";
    }
  }
  }


