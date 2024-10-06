import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { AuthService } from '../auth-service/auth.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, 
      CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, 
      IconDirective, FormControlDirective, ButtonDirective, NgStyle, ReactiveFormsModule]
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder, 
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.login(loginData).subscribe(
        (response: any) => {
          // Store the JWT token
          // localStorage.setItem('token', response.tokenData.accessToken);


          localStorage.setItem('token', response.accessToken);
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          console.error('Login error', error);
        }
      );
    }
  }

}


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
// import { AuthService } from '../auth-service/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     private fb: FormBuilder
//   ) {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       const loginData = this.loginForm.value;
//       this.authService.login(loginData).subscribe(
//         (response: any) => {
//           // Store the JWT token
//           localStorage.setItem('token', response.tokenData.accessToken);

//           // Navigate to the dashboard or any other protected route
//           this.router.navigate(['/dashboard']);
//         },
//         (error: any) => {
//           console.error('Login error', error);
//         }
//       );
//     }
//   }
// }
