import { Component } from '@angular/core';
import { BoardHeaderComponent } from './board-header/board-header.component';
import { BoardContantComponent } from './board-contant/board-contant.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardHeaderComponent, BoardContantComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
