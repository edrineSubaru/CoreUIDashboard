
import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { AuthGuard } from './views/pages/auth.guard'; 


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { title: 'Home' },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Dashboard' }
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Theme' }
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Base' }
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Buttons' }
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Forms' }
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Icons' }
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Notifications' }
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Widgets' }
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Charts' }
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/routes').then((m) => m.routes),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'Pages' }
      },
      {
        path: 'my-services',
        loadChildren: () =>
          import('./views/my-services/personal-profile/my-services-routes').then(
            (m) => m.myServicesRoutes
          ),
        canActivate: [AuthGuard], // Protect this route
        data: { title: 'My Services' }
      },
    ]
  },
  {
    path: '404',
    loadComponent: () =>
      import('./views/pages/page404/page404.component').then(
        (m) => m.Page404Component
      ),
    data: { title: 'Page 404' }
  },
  {
    path: '500',
    loadComponent: () =>
      import('./views/pages/page500/page500.component').then(
        (m) => m.Page500Component
      ),
    data: { title: 'Page 500' }
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./views/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
    data: { title: 'Login Page' }
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./views/pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    data: { title: 'Register Page' }
  },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  }
];


// import { Routes } from '@angular/router';
// import { DefaultLayoutComponent } from './layout';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full',
//   },
//   {
//     path: '',
//     component: DefaultLayoutComponent,
//     data: { title: 'Home' },
//     children: [
//       {
//         path: 'dashboard',
//         loadChildren: () =>
//           import('./views/dashboard/routes').then((m) => m.routes),
//         data: { title: 'Dashboard' }
//       },
//       {
//         path: 'theme',
//         loadChildren: () =>
//           import('./views/theme/routes').then((m) => m.routes),
//         data: { title: 'Theme' }
//       },
//       {
//         path: 'base',
//         loadChildren: () =>
//           import('./views/base/routes').then((m) => m.routes),
//         data: { title: 'Base' }
//       },
//       {
//         path: 'buttons',
//         loadChildren: () =>
//           import('./views/buttons/routes').then((m) => m.routes),
//         data: { title: 'Buttons' }
//       },
//       {
//         path: 'forms',
//         loadChildren: () =>
//           import('./views/forms/routes').then((m) => m.routes),
//         data: { title: 'Forms' }
//       },
//       {
//         path: 'icons',
//         loadChildren: () =>
//           import('./views/icons/routes').then((m) => m.routes),
//         data: { title: 'Icons' }
//       },
//       {
//         path: 'notifications',
//         loadChildren: () =>
//           import('./views/notifications/routes').then((m) => m.routes),
//         data: { title: 'Notifications' }
//       },
//       {
//         path: 'widgets',
//         loadChildren: () =>
//           import('./views/widgets/routes').then((m) => m.routes),
//         data: { title: 'Widgets' }
//       },
//       {
//         path: 'charts',
//         loadChildren: () =>
//           import('./views/charts/routes').then((m) => m.routes),
//         data: { title: 'Charts' }
//       },
//       {
//         path: 'pages',
//         loadChildren: () =>
//           import('./views/pages/routes').then((m) => m.routes),
//         data: { title: 'Pages' }
//       },
//       {
//         path: 'my-services',
//         loadChildren: () =>
//           import('./views/my-services/personal-profile/my-services-routes').then(
//             (m) => m.myServicesRoutes
//           ),
//         data: { title: 'My Services' }
//       },
//     ]
//   },
//   {
//     path: '404',
//     loadComponent: () =>
//       import('./views/pages/page404/page404.component').then(
//         (m) => m.Page404Component
//       ),
//     data: { title: 'Page 404' }
//   },
//   {
//     path: '500',
//     loadComponent: () =>
//       import('./views/pages/page500/page500.component').then(
//         (m) => m.Page500Component
//       ),
//     data: { title: 'Page 500' }
//   },
//   {
//     path: 'login',
//     loadComponent: () =>
//       import('./views/pages/login/login.component').then(
//         (m) => m.LoginComponent
//       ),
//     data: { title: 'Login Page' }
//   },
//   {
//     path: 'register',
//     loadComponent: () =>
//       import('./views/pages/register/register.component').then(
//         (m) => m.RegisterComponent
//       ),
//     data: { title: 'Register Page' }
//   },
//   { 
//     path: '**', 
//     redirectTo: 'dashboard' 
//   }
// ];
