import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  list = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.list = this.todoService.todoList;
  }

}
