import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRexourceComponent } from './update-rexource.component';

describe('UpdateRexourceComponent', () => {
  let component: UpdateRexourceComponent;
  let fixture: ComponentFixture<UpdateRexourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRexourceComponent]
    });
    fixture = TestBed.createComponent(UpdateRexourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
