import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
  
})

export class ContactsComponent implements OnInit {
  status: 'active' | 'inactive' = 'inactive';


  constructor() { }
  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }

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


