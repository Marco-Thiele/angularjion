import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGreetingsComponent } from './summary-greetings.component';

describe('SummaryGreetingsComponent', () => {
  let component: SummaryGreetingsComponent;
  let fixture: ComponentFixture<SummaryGreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryGreetingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryGreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
