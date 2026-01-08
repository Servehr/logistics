import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingControlComponent } from './setting-control.component';

describe('SettingControlComponent', () => {
  let component: SettingControlComponent;
  let fixture: ComponentFixture<SettingControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingControlComponent]
    });
    fixture = TestBed.createComponent(SettingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
