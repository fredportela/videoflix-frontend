import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;

  private $getIsLoggedIn: Subscription;
  isLoggedInUptodate: boolean;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.isLoggedInUptodate = false;
    this.$getIsLoggedIn = this.authService.getIsLoggedinListerner()
      .subscribe((resp: boolean) => {
        this.isLoggedInUptodate = resp;
      });

      this.isLoggedInUptodate = this.authService.isLogged();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
