import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:5006/api/v1';
  private URLAPPLIST = 'http://localhost:4200/auth/signin';

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  sessionValidation(token: any) {
    return this.http.post<any>(this.URL + '/session-validation', token);
  }

  getAppToken() {
    if (isPlatformBrowser(this.platformId)) {
      let token = localStorage?.getItem('authToken');
      if (!token) return null;

      let decodeToken = this.jwtHelper.decodeToken(token);
      let filter = decodeToken.infoApps.filter((f: any) => f.appId == localStorage.getItem('appId'));
      return filter[0];
    }
  }

  validateTokenExpired() {
    const authToken: any = localStorage.getItem('authToken');

    this.sessionValidation(authToken).subscribe((res: any) => {
      const logout = res.logout
      if (logout) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('appId');
        /*             this.router.navigate(['/signin']); */
        // window.location.href = "http://localhost:4200/home/appList";
        window.location.href = this.URLAPPLIST;

      } else {
        this.router.navigate(['dashboard']);
      }
    })
  }

  logout() {
    localStorage.removeItem('authToken');
    /*     this.router.navigate(['/signin']); */
    localStorage.removeItem('appId');
    /*     window.location.href = "http://localhost:4200/home/appList"; */

    //window.location.href = "http://localhost:4200/home/appList" + 'home?logout=' + true;
    window.location.href = this.URLAPPLIST
  }
}
