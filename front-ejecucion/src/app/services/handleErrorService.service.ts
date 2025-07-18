import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { OvertimeService } from "./overtime.service";

@Injectable({
  providedIn: "root",
})
export class HandleErrorService {
  constructor(
    private toastr: ToastrService,
    private overtimeService: OvertimeService,
    private router: Router
  ) { }

  public handleError(err: HttpErrorResponse,) {
    let errorMessage: string;
    let infoMessage: string;
    if (err.error instanceof ErrorEvent) {

    } else {
      //Observable utilizado para activar o desactivar el load de carga, mientras realiza procesos.
      this.overtimeService.activeLoadWait$.next(false);

      switch (err.status) {
        case 100:
          infoMessage = `${err.status}: ${err.error.messages}`;
          this.toastr.info(infoMessage, '', {
            timeOut: 5000
          });
          break;
        case 200:
          infoMessage = `${err.status}: ${err.error.messages}`;
          this.toastr.info(infoMessage, '', {
            timeOut: 5000
          });
          break;
        case 400:
          infoMessage = `${err.status}: ${err.error.messages}`;
          this.toastr.warning(infoMessage, '', {
            timeOut: 5000
          });
          break;
        case 401:
          localStorage.removeItem('authToken');
          localStorage.removeItem('appId');
          this.router.navigate(['token-auth']);
          //window.location.href = "http://localhost:4200/home/appList";
          errorMessage = `${err.status}: ${err.error.messages}`;
          break;
        case 403:
          errorMessage = `${err.status}: ${err.error.messages}`;
          this.toastr.error(errorMessage);
          if (err.error.authToken != undefined) {
            localStorage.removeItem('authToken');
            localStorage.setItem('authToken', err.error.authToken);

            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
              this.router.navigate(['dashboard']);
            });
          } else {
            this.router.navigateByUrl('/dashboard/notAuth');
          }
          break;
        case 404:
          errorMessage = `${err.status}: ${err.error.messages}`;
          this.toastr.error(errorMessage);
          break;
        case 412:
          errorMessage = `${err.status}: ${err.error.messages}`;
          this.toastr.error(errorMessage);
          break;
        case 500:
          errorMessage = `${err.status}: ${err.error.messages}`;
          this.toastr.error(errorMessage);
          break;
        case 503:
          this.router.navigateByUrl('/maintenance');
          break;
        default:
          errorMessage = `Algo salio mal!`;
      }
    }
  }
}
