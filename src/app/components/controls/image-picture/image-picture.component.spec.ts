import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePictureComponent } from './image-picture.component';

describe('ImagePictureComponent', () => {
  let component: ImagePictureComponent;
  let fixture: ComponentFixture<ImagePictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagePictureComponent]
    });
    fixture = TestBed.createComponent(ImagePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
