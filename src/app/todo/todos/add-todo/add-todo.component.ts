import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <input type="text" placeholder="할일 추가" [(ngModel)]="newText">
    <button (click)="addTodo(newText)">Add</button>
  `,
  styles: [`

    :host {
      display: block;
      padding: 16px;
      background-color: white;
    }

    import {
      display: inline-block;
      font-size: 18px;
      border: none;
    }

    input:focus, button:focus {
      outline: none;
    }

    button {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      color: white;
      font-size: 16px;
      line-height: 17px;
      border: 1px solid dimgray;
      background-color: darkblue;
    }
  `
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
