import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceProductOnShelveComponent } from './place-product-on-shelve.component';

describe('PlaceProductOnShelveComponent', () => {
  let component: PlaceProductOnShelveComponent;
  let fixture: ComponentFixture<PlaceProductOnShelveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceProductOnShelveComponent]
    });
    fixture = TestBed.createComponent(PlaceProductOnShelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
