import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLocalGovernmentComponent } from './remove-local-government.component';

describe('RemoveLocalGovernmentComponent', () => {
  let component: RemoveLocalGovernmentComponent;
  let fixture: ComponentFixture<RemoveLocalGovernmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveLocalGovernmentComponent]
    });
    fixture = TestBed.createComponent(RemoveLocalGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
