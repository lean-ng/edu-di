import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../todos/todos.service';
import {MultipleService} from '../../multiple.service';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.css'],
  providers: [MultipleService]
})
export class StatsDisplayComponent implements OnInit {

  // constructor(public todosSvc: TodosService, private multiple: MultipleService) { }
  constructor(private multiple: MultipleService) { }

  ngOnInit(): void {
  }

}
