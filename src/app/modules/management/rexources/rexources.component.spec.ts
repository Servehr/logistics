import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexourcesComponent } from './rexources.component';

describe('RexourcesComponent', () => {
  let component: RexourcesComponent;
  let fixture: ComponentFixture<RexourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RexourcesComponent]
    });
    fixture = TestBed.createComponent(RexourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
