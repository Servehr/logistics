import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStateComponent } from './remove-state.component';

describe('RemoveStateComponent', () => {
  let component: RemoveStateComponent;
  let fixture: ComponentFixture<RemoveStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveStateComponent]
    });
    fixture = TestBed.createComponent(RemoveStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
