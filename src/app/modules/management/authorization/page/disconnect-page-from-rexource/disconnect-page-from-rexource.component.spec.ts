import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectPageFromRexourceComponent } from './disconnect-page-from-rexource.component';

describe('DisconnectPageFromRexourceComponent', () => {
  let component: DisconnectPageFromRexourceComponent;
  let fixture: ComponentFixture<DisconnectPageFromRexourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisconnectPageFromRexourceComponent]
    });
    fixture = TestBed.createComponent(DisconnectPageFromRexourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
