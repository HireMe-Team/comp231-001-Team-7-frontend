import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rl-profile',
  templateUrl: './rl-profile.component.html',
  styleUrls: ['./rl-profile.component.css'],
})
export class RlProfileComponent implements OnInit {
  id: number;
  user: IUser;
  resumes: any = [];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(this.id).subscribe((user) => {
      this.user = user;
    });
  }
}
