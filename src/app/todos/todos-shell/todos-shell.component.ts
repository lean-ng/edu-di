import { Component, OnInit } from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todos-shell',
  templateUrl: './todos-shell.component.html',
  styleUrls: ['./todos-shell.component.css'],
  providers: [TodosService]
})
export class TodosShellComponent implements OnInit {

  constructor(public todosSvc: TodosService) { }

  ngOnInit(): void {
  }

}
