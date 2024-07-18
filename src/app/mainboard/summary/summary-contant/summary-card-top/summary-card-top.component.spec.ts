import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCardTopComponent } from './summary-card-top.component';

describe('SummaryCardTopComponent', () => {
  let component: SummaryCardTopComponent;
  let fixture: ComponentFixture<SummaryCardTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryCardTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryCardTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
