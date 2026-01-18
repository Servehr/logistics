import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexourceComponent } from './rexource.component';

describe('RexourceComponent', () => {
  let component: RexourceComponent;
  let fixture: ComponentFixture<RexourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RexourceComponent]
    });
    fixture = TestBed.createComponent(RexourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
