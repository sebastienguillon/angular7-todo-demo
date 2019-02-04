import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  formData: any = {};

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.resetFormData();
  }

  addItem(formIsValid: boolean): void {
    if (formIsValid) {
      const data = this.formData.task.trim();
      if (data !== '') {
        this.todoService.addItem(data);
        this.formData.task = '';
      }
    }
  }

  private resetFormData(): void {
    this.formData = {};
  }
}
