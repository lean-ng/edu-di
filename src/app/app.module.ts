import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MultipleModule} from './multiple/multiple.module';
import {TodosModule} from './todos/todos.module';
import {StatsModule} from './stats/stats.module';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import {MultipleService} from './multiple.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Feature Modules
    TodosModule,
    MultipleModule,
    StatsModule,

    // Shared Module
    SharedModule
  ],
  providers: [MultipleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
