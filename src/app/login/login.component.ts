import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      new User(1, 'user 01', 'last 01', 'user01@demo.com'),
      new User(2, 'user 02', 'last 02', 'user02@demo.com'),
      new User(3, 'user 03', 'last 03', 'user03@demo.com'),
    ];
  }

}
