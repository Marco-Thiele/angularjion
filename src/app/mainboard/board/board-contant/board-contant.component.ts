import { Component, inject } from '@angular/core';
import { DatabankService } from '../../../databank.service';
import { BoardCardComponent } from './board-card/board-card.component';

@Component({
  selector: 'app-board-contant',
  standalone: true,
  imports: [BoardCardComponent],
  templateUrl: './board-contant.component.html',
  styleUrl: './board-contant.component.scss'
})
export class BoardContantComponent {

  databank= inject(DatabankService)
  allCards=this.databank.allCards
  constructor(){
    this.onload()
  }

  onload(){
    console.log('databank',this.allCards)
  }

}
