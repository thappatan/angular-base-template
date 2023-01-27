import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class RedirectHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        () => {},
        (err: HttpErrorResponse) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == HttpStatusCode.Unauthorized) {
              // TODO: implement unauthen
            }
          }
        }
      )
    );
  }
}
