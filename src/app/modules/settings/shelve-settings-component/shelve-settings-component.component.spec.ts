import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelveSettingsComponentComponent } from './shelve-settings-component.component';

describe('ShelveSettingsComponentComponent', () => {
  let component: ShelveSettingsComponentComponent;
  let fixture: ComponentFixture<ShelveSettingsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShelveSettingsComponentComponent]
    });
    fixture = TestBed.createComponent(ShelveSettingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
