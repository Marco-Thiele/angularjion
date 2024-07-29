import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './board/board.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-mainboard',
  standalone: true,
  imports: [AppComponent, CommonModule, SummaryComponent, BoardComponent, AddTaskComponent, ContactsComponent, RouterOutlet],
  templateUrl: './mainboard.component.html',
  styleUrl: './mainboard.component.scss'
})
export class MainboardComponent {

  active:string = 'addTask'

  changeActive(active:string){
    this.active = active
  }

}
