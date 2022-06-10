import { Component } from '@angular/core';
import myUsers from './users.json';
interface USERS {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  gender: String;
  ip_address: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jesonTable';
  users: USERS[] = myUsers;

  constructor() {
    console.log(this.users);
  }
}
