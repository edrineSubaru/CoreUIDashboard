
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      // Optionally, decode and validate token expiration
      const tokenPayload = this.decodeToken(token);
      const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds

      if (tokenPayload && tokenPayload.exp > currentTime) {
        return true;  // Token is valid and not expired
      } else {
        // Token is expired or invalid, clear it and redirect to login
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      // No token found, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  

  // A helper function to decode JWT token and extract the payload
  decodeToken(token: string) {
    try {
      const payload = atob(token.split('.')[1]);  // Decoding the payload from base64
      return JSON.parse(payload);
    } catch (error) {
      console.error('Invalid token');
      return null;
    }
  }
}


// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     const token = localStorage.getItem('token');

//     if (token) {
//       // Optionally, you can add additional logic to validate the token (e.g., check expiration)
//       return true;
//     } else {
//       // Redirect to login page if no token is found
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
