import { Injectable } from '@angular/core';

// Self-Providing Service
// Es ist kein Module (root) - Provider nötig, der Dienst ist sein eigener Provider
// für den root-Kontext
// Exists seit Angular 6
// Best-Practice!
//
// Pro-Argumente:
//    - keine Problem mit module-provided root services and lazy loading
//    - better supporting tree shaking
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    console.log('Self-provided Singleton Service Auth');
  }
}
