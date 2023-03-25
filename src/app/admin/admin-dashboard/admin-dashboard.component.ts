import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private jobService: JobsService
  ) {}
  tip = {
    title: '',
    body: '',
  };
  createJobHuntingTip() {
    this.jobService.createJobSeekingSuggestions(this.tip).subscribe((res) => {
      console.log(res);
    });
  }

  totalUsers: number;
  unapprovedRecruiters: any[] = [];
  selectedRecruiter: number;

  ngOnInit(): void {
    this.adminService.getTotalUsers().subscribe((data: any) => {
      this.totalUsers = data.totalUsers;
    });
    this.adminService.getUnapprovedRecruiters().subscribe((data: any) => {
      console.log(data);
      this.unapprovedRecruiters = data;
    });
  }

  approveRecruiter(): void {
    this.adminService
      .approveRecruiter(this.selectedRecruiter)
      .subscribe((data: any) => {
        // Refresh the list of unapproved recruiters
        this.adminService.getUnapprovedRecruiters().subscribe((data: any) => {
          this.unapprovedRecruiters = data.unapprovedRecruiters;
        });
      });
  }
}
