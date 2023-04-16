// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { JobsService } from 'src/app/services/jobs.service';

// Define the component
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  // Define variables for displaying success/error messages to the user
  messageObj = {
    message: '',
    class: '',
  };

  // Inject necessary services
  constructor(
    private adminService: AdminService,
    private jobService: JobsService
  ) {}

  // Define variables for creating job hunting tips
  tip = {
    title: '',
    body: '',
  };

  // Define function to create a job hunting tip
  createJobHuntingTip() {
    this.jobService.createJobSeekingSuggestions(this.tip).subscribe((res) => {
      window.location.reload();
    });
  }

  // Define variables for displaying total users and unapproved recruiters
  totalUsers: number;
  unapprovedRecruiters: any[] = [];
  selectedRecruiter: number;

  // Initialize the component on page load
  ngOnInit(): void {
    // Get the total number of users
    this.adminService.getTotalUsers().subscribe((data: any) => {
      this.totalUsers = data.totalUsers;
    });

    // Get the list of unapproved recruiters
    this.adminService.getUnapprovedRecruiters().subscribe((data: any) => {
      this.unapprovedRecruiters = data;
    });
  }

  // Define function to approve a recruiter
  approveRecruiter(): void {
    this.adminService
      .approveRecruiter(this.selectedRecruiter)
      .subscribe((data: any) => {
        // Display success message to the user
        this.messageObj.message = 'Approved';

        // Refresh the list of unapproved recruiters
        this.adminService.getUnapprovedRecruiters().subscribe((data: any) => {
          this.unapprovedRecruiters = data.unapprovedRecruiters;
        });
      });
  }
}
