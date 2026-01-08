import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingReportComponent } from './ranking-report.component';

describe('RankingReportComponent', () => {
  let component: RankingReportComponent;
  let fixture: ComponentFixture<RankingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankingReportComponent]
    });
    fixture = TestBed.createComponent(RankingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
