import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimerComponent } from './first-timer.component';

describe('FirstTimerComponent', () => {
  let component: FirstTimerComponent;
  let fixture: ComponentFixture<FirstTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirstTimerComponent]
    });
    fixture = TestBed.createComponent(FirstTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
