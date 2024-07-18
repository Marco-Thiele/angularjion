import { Component } from '@angular/core';
import { SummaryComponent } from '../summary.component';

@Component({
  selector: 'app-summary-header',
  standalone: true,
  imports: [SummaryComponent],
  templateUrl: './summary-header.component.html',
  styleUrl: './summary-header.component.scss'
})
export class SummaryHeaderComponent {

}
