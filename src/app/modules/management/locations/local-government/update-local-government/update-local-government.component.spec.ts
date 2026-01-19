import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocalGovernmentComponent } from './update-local-government.component';

describe('UpdateLocalGovernmentComponent', () => {
  let component: UpdateLocalGovernmentComponent;
  let fixture: ComponentFixture<UpdateLocalGovernmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLocalGovernmentComponent]
    });
    fixture = TestBed.createComponent(UpdateLocalGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
