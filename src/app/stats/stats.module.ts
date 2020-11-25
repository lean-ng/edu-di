import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatsDisplayComponent} from './stats-display/stats-display.component';
import { StatsChildComponent } from './stats-child/stats-child.component';

@NgModule({
  declarations: [
    StatsDisplayComponent,
    StatsChildComponent
  ],
  exports: [
    StatsDisplayComponent,
    StatsChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatsModule { }
