import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
@Injectable()
export class ContentService {

  number$: Observable<number> = of(5);
  constructor() { }

  setNumber(number): void {
    this.number$ = of(number);
  }

  getNumber(): Observable<number> {
    return this.number$;
  }
}
