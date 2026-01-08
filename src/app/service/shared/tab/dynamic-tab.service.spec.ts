import { TestBed } from '@angular/core/testing';

import { DynamicTabService } from './dynamic-tab.service';

describe('DynamicTabService', () => {
  let service: DynamicTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
