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
import { JobListPreviewComponent } from './job-list-preview/job-list-preview.component';


@NgModule({
  declarations: [
    JobListComponent,
    JobHuntingSuggestionComponent,
    JobPostComponent,
    JobPostCreateComponent,
    JobApplicationComponent,
    JobListPreviewComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  exports: [JobListComponent, JobHuntingSuggestionComponent, JobPostCreateComponent, JobListPreviewComponent],
})
export class JobsModule {}
