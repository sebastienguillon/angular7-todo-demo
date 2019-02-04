import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = [];

  constructor() { }

  addItem(itemText: string) {
    this.todoList.push(itemText);
  }
}
