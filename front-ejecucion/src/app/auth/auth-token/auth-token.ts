import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-token',
  imports: [NgxSpinnerModule, CommonModule],
  templateUrl: './auth-token.html',
  styleUrl: './auth-token.scss'
})
export class AuthToken implements OnInit {
  urlTree: any = ''
  tokenPass: any = ''
  appId: any = '';
  tokenApp: any = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.urlTree = this.router.parseUrl(this.router.url);
    this.tokenPass = this.urlTree.queryParams['tokenAuth'];
    this.appId = this.urlTree.queryParams['currentApp'];

    if (this.tokenPass !== undefined && this.appId !== undefined) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('appId', this.appId);
        localStorage.setItem('authToken', this.tokenPass);
      }

      this.tokenApp = this.authService.getAppToken();
      this.spinner.show();
      this.spinner.hide();
      if (this.tokenApp?.role == 'coord' || this.tokenApp?.role == 'admin') {
        this.router.navigate(['/']);
      } else {
        /* this.router.navigate(['/dashboard/home-employe']); */
      }

    } else {
      if (localStorage.getItem('authToken') != null && localStorage.getItem('appId')) {
        this.authService.validateTokenExpired();
      } else {
        this.authService.logout();
      }
    }
  }
}
