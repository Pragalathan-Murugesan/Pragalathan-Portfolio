import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pdfSrc =  "../assets/Images/Pragalathan M_resume.pdf";
  status: 'active' | 'inactive' = 'inactive';

  constructor() { }
  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }

  
  ngOnInit(): void {
  }

}
