import {Injectable} from '@angular/core';
import {BackendService} from './todos/backend.service';

@Injectable()
export class MultipleService {
  static instanceCount = 0;

  instanceNr: number;

  constructor() {
    console.log('MultipleService, Instance:', ++MultipleService.instanceCount);
    this.instanceNr = MultipleService.instanceCount;
  }
}
