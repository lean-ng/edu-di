import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosShellComponent } from './todos-shell/todos-shell.component';
import {InheritedService, TodosService} from './todos.service';
import {BackendService} from './backend.service';


function serviceFactory(): TodosService {
  const svc = new TodosService(new BackendService());
  svc.todos = [];
  return svc;
}

@NgModule({
  declarations: [TodosShellComponent],
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  providers: [
    // All providers in a module provide services in root-Context

    // short-hand for useClass (wenn provide und useClass die selben Typen sind)
    BackendService,
    // TodosService,

    // useClass-Recipe
    // { provide: TodosService, useClass: InheritedService }

    // useValue-Recipe: mostly used in testing scenarios
    // { provide: TodosService, useValue: { todos: ['1', '2'] } }

    // useFactory-Recipe: nur nötig, wenn die Dienst-Erzeugung beeinflusst werden muss
    // { provide: TodosService, useFactory: serviceFactory},

    // useExisting-Recipe: Alias-Recipe
    // InheritedService,
    // { provide: TodosService, useExisting: InheritedService }
  ]
})
export class TodosModule { }
