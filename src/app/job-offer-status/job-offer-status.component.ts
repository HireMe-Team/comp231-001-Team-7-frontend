import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-offer-status',
  templateUrl: './job-offer-status.component.html',
  styleUrls: ['./job-offer-status.component.css']
})
export class JobOfferStatusComponent implements OnInit {
  jobOffers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/job-offers').subscribe((jobOffers: any[]) => {
      this.jobOffers = jobOffers;
    });
  }
}
