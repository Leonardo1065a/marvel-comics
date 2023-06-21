import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export abstract class CommonsService<T> {
  protected __store = inject(Store);

  protected __router = inject(Router);

  public __data$: Observable<T> | null = null;

  public __control$: Observable<any> | null = null;

  constructor() {}
}
