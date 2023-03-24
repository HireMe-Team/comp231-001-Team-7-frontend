import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  onSubmit() {
    if (this.username === 'example' && this.password === 'password') {
      
      console.log('Login successful');
    } else {
      
      console.log('Login failed');
    }
  }
}

