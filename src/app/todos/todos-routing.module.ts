import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosShellComponent} from './todos-shell/todos-shell.component';

const routes: Routes = [
  { path: 'todos', component: TodosShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
