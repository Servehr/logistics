import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemantComponent } from './managemant.component';

describe('ManagemantComponent', () => {
  let component: ManagemantComponent;
  let fixture: ComponentFixture<ManagemantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagemantComponent]
    });
    fixture = TestBed.createComponent(ManagemantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
