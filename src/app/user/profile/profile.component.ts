import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: IUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const userId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUser(userId);
  }
}
