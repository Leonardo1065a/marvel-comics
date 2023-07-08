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
import { MD5 } from 'crypto-es/lib/md5.js';
import { Observable } from 'rxjs';

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
    const hash = MD5(`${ts}${privateKey}${apikey}`).toString();

    return { apikey, hash, ts };
  }
}
