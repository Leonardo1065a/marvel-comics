import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  
  constructor(@Inject(forwardRef(() => LoadingService)) private loadingService: LoadingService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loadingService.openLoader();
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.loadingService.closeLoader();
        }
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          this.loadingService.closeLoader();
        }
        return throwError(err);
      })
    );
  }
}
