import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  onSearch($event: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
