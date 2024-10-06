import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { AuthService } from './views/pages/auth-service/auth.service';  // Import your AuthService

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  standalone: true,
  imports: [RouterOutlet], // No need for HttpClientModule here anymore
})
export class AppComponent implements OnInit {
  title = 'Edrine Management System';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private authService: AuthService // Inject AuthService to manage authentication
  ) {
    this.titleService.setTitle(this.title);
    // iconSet singleton
    this.iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

    // Check if the user is authenticated on app initialization
    const token = localStorage.getItem('token');
    if (!this.authService.isTokenValid(token)) {
      // Redirect to login page if token is invalid or missing
      this.router.navigate(['/login']);
    }
  }
}


// import { Component, OnInit } from '@angular/core';
// import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
// import { Title } from '@angular/platform-browser';
// import { IconSetService } from '@coreui/icons-angular';
// import { iconSubset } from './icons/icon-subset';

// @Component({
//   selector: 'app-root',
//   template: '<router-outlet />',
//   standalone: true,
//   imports: [RouterOutlet], // No need for HttpClientModule here anymore
// })
// export class AppComponent implements OnInit {
//   title = 'Edrine Management System';

//   constructor(
//     private router: Router,
//     private titleService: Title,
//     private iconSetService: IconSetService,
//   ) {
//     this.titleService.setTitle(this.title);
//     // iconSet singleton
//     this.iconSetService.icons = { ...iconSubset };
//   }

//   ngOnInit(): void {
//     this.router.events.subscribe((evt) => {
//       if (!(evt instanceof NavigationEnd)) {
//         return;
//       }
//     });
//   }
// }
