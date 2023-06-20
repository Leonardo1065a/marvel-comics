import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export abstract class BaseComponent<T> {
  protected __router = inject(Router);

  public __data$: Observable<T> | null = null;

  public __control$: Observable<any> | null = null;

  constructor() {}
}
