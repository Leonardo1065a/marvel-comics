import { pipe, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export function resultMap<T>() {
  return pipe(
    map((res: T) => res),
    catchError((err: any) => throwError(() => err )));
}
