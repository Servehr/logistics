import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUnlinkActionComponent } from './link-unlink-action.component';

describe('LinkUnlinkActionComponent', () => {
  let component: LinkUnlinkActionComponent;
  let fixture: ComponentFixture<LinkUnlinkActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkUnlinkActionComponent]
    });
    fixture = TestBed.createComponent(LinkUnlinkActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
