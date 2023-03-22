import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostCreateComponent } from './job-post-create.component';

describe('JobPostCreateComponent', () => {
  let component: JobPostCreateComponent;
  let fixture: ComponentFixture<JobPostCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
