import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRoleComponent } from './remove-role.component';

describe('RemoveRoleComponent', () => {
  let component: RemoveRoleComponent;
  let fixture: ComponentFixture<RemoveRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveRoleComponent]
    });
    fixture = TestBed.createComponent(RemoveRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
