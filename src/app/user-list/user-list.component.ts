import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  role: string;
  verified: boolean;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    { name: 'Ana Rivera', email: 'ana@gmail.com', role: 'Admin', verified: false },
    { name: 'John Campos', email: 'john@yahoo.com', role: 'User', verified: true },
    { name: 'Long Tang ', email: 'long@gmail.com', role: 'User', verified: false },
  ];

  verifyUser(user: User) {
    user.verified = true;
    // Call an API or service to update the user verification status in the database
  }
}


