import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatsDisplayComponent} from './stats-display/stats-display.component';

@NgModule({
  declarations: [
    StatsDisplayComponent
  ],
  exports: [
    StatsDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatsModule { }
