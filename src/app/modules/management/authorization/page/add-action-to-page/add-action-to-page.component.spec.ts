import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActionToPageComponent } from './add-action-to-page.component';

describe('AddActionToPageComponent', () => {
  let component: AddActionToPageComponent;
  let fixture: ComponentFixture<AddActionToPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddActionToPageComponent]
    });
    fixture = TestBed.createComponent(AddActionToPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
