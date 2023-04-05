import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferStatusComponent } from './job-offer-status.component';

describe('JobOfferStatusComponent', () => {
  let component: JobOfferStatusComponent;
  let fixture: ComponentFixture<JobOfferStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
