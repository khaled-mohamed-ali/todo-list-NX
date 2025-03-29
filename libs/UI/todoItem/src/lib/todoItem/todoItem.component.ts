import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-todo-item',
  imports: [CommonModule],
  templateUrl: './todoItem.component.html',
  styleUrl: './todoItem.component.css',
})
export class TodoItemComponent {
  todo = input<{ id: number; title: string; descreption: string}| null>(null);
}
