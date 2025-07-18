import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { HandleErrorService } from "./handleErrorService.service";

@Injectable()
export class HandleErrorsInterceptor implements HttpInterceptor {

  constructor(private error: HandleErrorService) { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* this.loaderService.llamarSpinner(); */
    const token: string | null = localStorage.getItem('authToken');
    //const appId: string | null = localStorage.getItem('appId');
    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          appId: `2`,
          authorization: `Bearer ${token}`
        }
      });
    }

    return new Observable((observer) => {
      next.handle(request).subscribe(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            observer.next(event);
            /* this.loaderService.detenerSpinner(); */
          }
        },
        (err: HttpErrorResponse) => {
          this.error.handleError(err);
          /*            this.loaderService.detenerSpinner(); */
        }
      );
    });

  }


}
