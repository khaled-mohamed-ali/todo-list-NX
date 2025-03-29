import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '@todo-list/todoItem';
import { PrimaryButtonComponent } from '@todo-list/primary-button';
import { TodoServiceService } from '@todo-list/todoService';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'lib-todos',
  imports: [
    CommonModule,
    TodoItemComponent,
    PrimaryButtonComponent,
    RouterLink,
  ],
  templateUrl: './Todos.component.html',
  styleUrl: './Todos.component.css',
})
export class TodosComponent {
  private todoService = inject(TodoServiceService);
  todoList = this.todoService.todos;

  selectTodo(todoItem: number) {
    this.todoService.todoId = todoItem;
  }
}
