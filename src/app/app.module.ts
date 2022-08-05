import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './todo/todo.module';
import {TodosComponent } from './todo/todos/todos.component';
import { AppComponent } from './app.component';

// Angular 모듈을 적용한 클래스
// Angualr의 root 모듈을 설정하는 클래스
@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
//     AppRoutingModule
  ],
  providers: [],
  bootstrap: [TodosComponent]
})
export class AppModule { }
