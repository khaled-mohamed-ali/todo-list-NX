import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '@todo-list/primary-button';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from '@todo-list/todoService';
import { TodoItemComponent } from '@todo-list/todoItem';

@Component({
  selector: 'lib-todo-manage',
  imports: [
    CommonModule,
    PrimaryButtonComponent,
    FormsModule,
    TodoItemComponent,
    RouterLink,
  ],
  templateUrl: './TodoManage.component.html',
  styleUrl: './TodoManage.component.css',
})
export class TodoManageComponent {
  private todoService = inject(TodoServiceService);
  todo = { title: '', descreption: '' };
  todoList = computed(() => this.todoService.todos());

  createTodo() {
    this.todoService.todos.update((todos) => [
      ...todos,
      {
        id: todos.length + 1,
        ...this.todo,
      },
    ]);

    this.todo = { title: '', descreption: '' };
  }

  deleteTodo(todoItem: number) {

    this.todoService.todos.update((todos) =>
      todos.filter((todo) => todo.id !== todoItem)
    );

  }
}
