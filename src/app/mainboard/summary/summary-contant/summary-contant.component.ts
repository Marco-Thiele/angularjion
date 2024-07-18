import { Component } from '@angular/core';
import { SummaryCardTopComponent } from "./summary-card-top/summary-card-top.component";
import { SummaryCardMidComponent } from './summary-card-mid/summary-card-mid.component';
import { SummaryCardBottomComponent } from './summary-card-bottom/summary-card-bottom.component';

@Component({
  selector: 'app-summary-contant',
  standalone: true,
  imports: [SummaryCardTopComponent, SummaryCardMidComponent, SummaryCardBottomComponent],
  templateUrl: './summary-contant.component.html',
  styleUrl: './summary-contant.component.scss'
})
export class SummaryContantComponent {

}
