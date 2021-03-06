import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  result: string = '';

  constructor() { }

  ngOnInit(): void {
    this.users = [
      new User(1, 'user 01', 'last 01', 'user01@demo.com', 1),
      new User(2, 'user 02', 'last 02', 'user02@demo.com', 2),
      new User(3, 'user 03', 'last 03', 'user03@demo.com', 3),
    ];
  }

  onClickedFromRating(event: string): void {
    console.log('Receive data from rating = ' + event);
    this.result = 'Receive data from rating = ' + event;
  }

}
