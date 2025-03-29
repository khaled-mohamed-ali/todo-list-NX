import { Route } from '@angular/router';
import {TodosComponent} from '@todo-list/Todos';
import {TodoManageComponent} from '@todo-list/TodoManage'
import { TodoComponent } from '@todo-list/todo';
export const appRoutes: Route[] = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'create-todo',
    component: TodoManageComponent,
  },
  {
    path: 'todo/id',
    component: TodoComponent,
  },
];
