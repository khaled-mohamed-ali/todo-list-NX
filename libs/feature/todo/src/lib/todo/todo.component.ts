import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '@todo-list/todoItem';
import { TodoServiceService } from '@todo-list/todoService';

@Component({
  selector: 'lib-todo',
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  private todoService = inject(TodoServiceService);
  todoList = this.todoService.todos;
  todoItem = this.todoList()[this.todoService.todoId];

}
