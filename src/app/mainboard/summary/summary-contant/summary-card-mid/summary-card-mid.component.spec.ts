import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCardMidComponent } from './summary-card-mid.component';

describe('SummaryCardMidComponent', () => {
  let component: SummaryCardMidComponent;
  let fixture: ComponentFixture<SummaryCardMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryCardMidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryCardMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
