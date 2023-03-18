import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';
import { JobHuntingSuggestionComponent } from './job-hunting-suggestion/job-hunting-suggestion.component';
import { JobPostComponent } from './job-post/job-post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    JobListComponent,
    JobHuntingSuggestionComponent,
    JobPostComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [JobListComponent, JobHuntingSuggestionComponent],
})
export class JobsModule {}
