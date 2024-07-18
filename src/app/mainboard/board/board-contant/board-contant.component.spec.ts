import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardContantComponent } from './board-contant.component';

describe('BoardContantComponent', () => {
  let component: BoardContantComponent;
  let fixture: ComponentFixture<BoardContantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardContantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
