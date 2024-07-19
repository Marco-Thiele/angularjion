import { Component, inject } from '@angular/core';
import { DatabankService } from '../../../../databank.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-card.component.html',
  styleUrl: './board-card.component.scss'
})
export class BoardCardComponent {

  databank= inject(DatabankService)
  allCards=this.databank.allCards
  
  constructor(){
    this.load()
  }

  load(){
    console.log('test',this.allCards)
  }



}
