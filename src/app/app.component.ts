import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menus: any[] = [
    { "id": 1, "name": "Dashboard" },
    { "id": 2, "name": "Account" },
    { "id": 3, "name": "Setting" },
    { "id": 4, "name": "Crud" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
