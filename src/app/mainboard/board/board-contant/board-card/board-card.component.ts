import { Component, inject, Input, input } from '@angular/core';
import { DatabankService } from '../../../../databank.service';
import { CommonModule } from '@angular/common';
import { BoardContantComponent } from '../board-contant.component';

@Component({
  selector: 'app-board-card',
  standalone: true,
  imports: [CommonModule, BoardContantComponent],
  templateUrl: './board-card.component.html',
  styleUrl: './board-card.component.scss'
})
export class BoardCardComponent {

  databank= inject(DatabankService)
  allCards=this.databank.allCard
  @Input()card:any 
  
  constructor(){
    this.load()
  }

  load(){
    console.log('test länge',this.card)
  }



}
