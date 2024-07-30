import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabankService } from '../../databank.service';
import { CardModule } from '../../card/card.module';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule, CardModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  prio: string = 'Medium';
  title: string = '';
  description: string = '';
  category: string = '';
  card: any
  databank = inject(DatabankService)

  setPrio(prio: string) {
    this.prio = prio;
  }


  clear() {
    this.title = '';
    this.description = '';
    this.category = '';
    this.prio = 'Medium';
  }

  createTask() {
    console.log('test', this.title, this.description, this.category, this.prio);
    this.card = {
      category: this.category,
      headliner: this.title,
      priority: this.prio,
      text: this.description,
      status: 'To do',
      assignetTo: [],
      subTasks: [],
      date: ''
    }
    this.databank.cardData.allCards.push(this.card)
    console.log('alle', this.databank);
    

     this.databank.addCard(this.databank.cardData) 
  }

  toJson(cards: any) {
    debugger
    return {
      headliner: cards.headliner,
      description: cards.text,
      priority: cards.priority,
      category: cards.category,
      status: cards.status,
      date: cards.date
    }

  }
}