import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

      const authenticatedRequest = request.clone(this.setHeaders(request));

      return next.handle(authenticatedRequest).pipe();
  }

  setHeaders(request) {
    const headerSettings: {[name: string]: string | string[]; } = {};

    headerSettings['Accept'] = 'application/vnd.twitchtv.v5+json';
    headerSettings['Client-ID'] = '5tccx4nxgt986uzekk77u4gqbfpe24';

    const newHeader = new HttpHeaders(headerSettings);
    return { headers: newHeader };
  }
}
