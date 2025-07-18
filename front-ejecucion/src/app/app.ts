import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule, MatIconModule, MatSidenavModule, CommonModule, MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App implements OnInit {
  protected title = 'ejecucion';
  isOpen = true;
  visibleIcon = false;
  isLargeScreen = true;
  routeActual = ''
  session: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.session = this.authService;

    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isLargeScreen = !result.matches;
      if (result.matches) {
        this.visibleIcon = true
      } else {
        this.visibleIcon = false
      }
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.routeActual = event.urlAfterRedirects
      });
  }

  toggleMenu() {
    this.isLargeScreen = !this.isLargeScreen
    if (!this.isLargeScreen) {
      this.visibleIcon = true
    } else {
      this.visibleIcon = false
    }
  }

  optionMenu = [
    {
      id: 1,
      name: "Gestión de valores",
      description: "Gestión de valores para creación de metas",
      icon: "attach_money",
      route: ""
    },
    {
      id: 2,
      name: "Metas mensuales",
      description: "Gestión de metas mensuales",
      icon: "flag",
      route: "monthlyGoals"
    },
    {
      id: 3,
      name: "Items de pago",
      description: "Parametrización items de pago",
      icon: "credit_card",
      route: "paymentItems"
    },
    {
      id: 4,
      name: "Diligenciamiento de ejecución",
      description: "Diligenciamiento de ejecución",
      icon: "poll",
      route: "executionFiling"
    }
  ]
}
