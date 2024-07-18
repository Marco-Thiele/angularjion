import { Component } from '@angular/core';
import { SummaryHeaderComponent } from './summary-header/summary-header.component';
import { SummaryContantComponent } from './summary-contant/summary-contant.component';
import { SummaryGreetingsComponent } from './summary-greetings/summary-greetings.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SummaryHeaderComponent, SummaryContantComponent, SummaryGreetingsComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
