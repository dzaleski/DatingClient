import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registerMode: boolean;

  constructor() {}

  ngOnInit() {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  registerCancelled(event: boolean) {
    this.registerMode = event;
  }
}
