import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodosComponent
  ],
  declarations: [
    AddTodoComponent
  ]
})
export class TodoModule { }
