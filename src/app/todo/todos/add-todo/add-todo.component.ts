import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <input type="text" placeholder="할일 추가" [(ngModel)]="newText">
    <button (click)="addTodo(newText)">Add</button>
  `,
  styles: [
  ]
})
export class AddTodoComponent implements OnInit {

  // 이벤트 정의
  @Output() onTodoAdded = new EventEmitter();
  newText: string;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
