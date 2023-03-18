import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHuntingSuggestionComponent } from './job-hunting-suggestion.component';

describe('JobHuntingSuggestionComponent', () => {
  let component: JobHuntingSuggestionComponent;
  let fixture: ComponentFixture<JobHuntingSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobHuntingSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobHuntingSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
