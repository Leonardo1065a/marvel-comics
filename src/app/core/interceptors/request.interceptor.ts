import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>
  > {
    req = req.clone({ setParams: this.getParams() });
    return next.handle(req);
  }

  private getParams() {
    const { apikey, privateKey } = environment;
    const ts = new Date().getMilliseconds().toString();
    const hash = new Md5().appendStr(`${ts}${privateKey}${apikey}`).end().toString();
    return { apikey, hash, ts };
  }
}
