import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabWrapperComponent } from './dynamic-tab-wrapper.component';

describe('DynamicTabWrapperComponent', () => {
  let component: DynamicTabWrapperComponent;
  let fixture: ComponentFixture<DynamicTabWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTabWrapperComponent]
    });
    fixture = TestBed.createComponent(DynamicTabWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
