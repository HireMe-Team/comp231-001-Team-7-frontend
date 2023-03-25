import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';
import { JobHuntingSuggestionComponent } from './job-hunting-suggestion/job-hunting-suggestion.component';
import { JobPostComponent } from './job-post/job-post.component';
import { HttpClientModule } from '@angular/common/http';
import { JobPostCreateComponent } from './job-post-create/job-post-create.component';
import { FormsModule } from '@angular/forms';
import { JobApplicationComponent } from './job-application/job-application.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    JobListComponent,
    JobHuntingSuggestionComponent,
    JobPostComponent,
    JobPostCreateComponent,
    JobApplicationComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  exports: [JobListComponent, JobHuntingSuggestionComponent],
})
export class JobsModule {}
