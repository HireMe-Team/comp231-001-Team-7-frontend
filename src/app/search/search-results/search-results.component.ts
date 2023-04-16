import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IJob from 'src/app/models/job.model';
import { JobsService } from 'src/app/services/jobs.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  keywords: string;
  type: string;
  searchResults: IJob[]; // Replace with a specific interface or class for your search results

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.keywords = params['keywords'];
      this.type = params['type'];
      this.searchService
        .search(this.keywords, this.type)
        .subscribe((results) => {
          this.searchResults = results;
        });
    });
  }
}
