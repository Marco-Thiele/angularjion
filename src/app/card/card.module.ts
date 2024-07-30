import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CardModule {
  public headliner: string = '';
  public description: string = '';
  public priority: string = ''
  public category: string = '';
  public status: string = '';

  public toJson() {
    return {
      headliner: this.headliner,
      description: this.description,
      priority: this.priority,
      category: this.category,
      status: this.status,
    }
  }
}
