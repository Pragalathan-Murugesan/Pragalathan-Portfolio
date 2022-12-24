import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('addItem', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition('void <=> *', animate('0.5s ease-in'))
    ]),
]
})
export class HomeComponent implements OnInit {
  @HostBinding('@.disabled')
  public animations = false;
  status: 'active' | 'inactive' = 'inactive';
  constructor(private contexts: ChildrenOutletContexts) { }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  toggleAnimations() {
    this.animations = !this.animations;
  }
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
