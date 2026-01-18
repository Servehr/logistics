import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectPageToRexourceComponent } from './connect-page-to-rexource.component';

describe('ConnectPageToRexourceComponent', () => {
  let component: ConnectPageToRexourceComponent;
  let fixture: ComponentFixture<ConnectPageToRexourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectPageToRexourceComponent]
    });
    fixture = TestBed.createComponent(ConnectPageToRexourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
