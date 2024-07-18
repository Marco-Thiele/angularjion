import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCardBottomComponent } from './summary-card-bottom.component';

describe('SummaryCardBottomComponent', () => {
  let component: SummaryCardBottomComponent;
  let fixture: ComponentFixture<SummaryCardBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryCardBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryCardBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
