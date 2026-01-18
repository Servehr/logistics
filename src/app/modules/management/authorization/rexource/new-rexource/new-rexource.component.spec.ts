import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRexourceComponent } from './new-rexource.component';

describe('NewRexourceComponent', () => {
  let component: NewRexourceComponent;
  let fixture: ComponentFixture<NewRexourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRexourceComponent]
    });
    fixture = TestBed.createComponent(NewRexourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
