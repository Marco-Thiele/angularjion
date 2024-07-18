import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryContantComponent } from './summary-contant.component';

describe('SummaryContantComponent', () => {
  let component: SummaryContantComponent;
  let fixture: ComponentFixture<SummaryContantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryContantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
