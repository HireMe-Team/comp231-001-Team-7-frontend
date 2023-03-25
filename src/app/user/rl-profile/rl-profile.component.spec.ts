import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlProfileComponent } from './rl-profile.component';

describe('RlProfileComponent', () => {
  let component: RlProfileComponent;
  let fixture: ComponentFixture<RlProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RlProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
