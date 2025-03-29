import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos = signal<{id: number; title: string; descreption: string }[]>([]);
  todoId = 0;
}
