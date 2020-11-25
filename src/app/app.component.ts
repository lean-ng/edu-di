import { Component } from '@angular/core';
import {MultipleService} from './multiple.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private multiple: MultipleService, private auth: AuthService) {
    console.log('AppComponent Constructed');
  }
}
