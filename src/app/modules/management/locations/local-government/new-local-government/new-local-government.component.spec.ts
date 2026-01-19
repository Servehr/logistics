import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocalGovernmentComponent } from './new-local-government.component';

describe('NewLocalGovernmentComponent', () => {
  let component: NewLocalGovernmentComponent;
  let fixture: ComponentFixture<NewLocalGovernmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLocalGovernmentComponent]
    });
    fixture = TestBed.createComponent(NewLocalGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
