import { Component, OnInit } from '@angular/core';
import {MultipleService} from '../../multiple.service';

@Component({
  selector: 'app-stats-child',
  templateUrl: './stats-child.component.html',
  styleUrls: ['./stats-child.component.css']
})
export class StatsChildComponent implements OnInit {

  constructor(private multiple: MultipleService) {
    console.log('Got Multiple-Service Nr', multiple.instanceNr);
  }

  ngOnInit(): void {
  }

}
