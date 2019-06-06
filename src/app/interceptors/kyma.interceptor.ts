import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class KymaInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (req.url.endsWith('price-suggest-production.hack2.cluster.extend.cx.cloud.sap')) {
        //     return of(new HttpResponse({ status: 200, body: { accepted: true } }));
        // }
        return next.handle(req);
    }
}
