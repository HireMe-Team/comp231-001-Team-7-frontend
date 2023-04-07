import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListPreviewComponent } from './job-list-preview.component';

describe('JobListPreviewComponent', () => {
  let component: JobListPreviewComponent;
  let fixture: ComponentFixture<JobListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
