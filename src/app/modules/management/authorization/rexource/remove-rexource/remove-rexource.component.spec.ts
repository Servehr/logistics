import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRexourceComponent } from './remove-rexource.component';

describe('RemoveRexourceComponent', () => {
  let component: RemoveRexourceComponent;
  let fixture: ComponentFixture<RemoveRexourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveRexourceComponent]
    });
    fixture = TestBed.createComponent(RemoveRexourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
