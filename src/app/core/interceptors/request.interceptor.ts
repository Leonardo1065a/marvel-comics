import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { 
    HttpProgressEvent, 
    HttpUserEvent,
    HttpResponse, 
    HttpHeaderResponse, 
    HttpSentEvent, 
    HttpHandler, 
    HttpRequest, 
    HttpInterceptor 
} from "@angular/common/http";
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent 
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
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