import {BackendService} from './backend.service';
import {Injectable} from '@angular/core';

// Decorator Injectable
// - zunächst deklariert er diesen Dienst als Injection-fähig und beauftragt Angular die
//   Konstruktor-Abhängigkeiten aufzulösen
@Injectable()
export class TodosService {

  static instanceCount = 0;

  todos = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];

  constructor(private backend: BackendService) {
    console.log('TodosService, Instance:', ++TodosService.instanceCount);
  }

}

@Injectable()
export class InheritedService extends TodosService {

  constructor(backend: BackendService) {
    super(backend);
    console.log('Inherited');
  }

}
