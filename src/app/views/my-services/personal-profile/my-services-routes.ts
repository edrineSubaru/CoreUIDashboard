import { Routes } from '@angular/router';

export const myServicesRoutes: Routes = [
  {
    path: '',
    data: { title: 'My Services' },
    children: [
      {
        path: 'official-profile',
        loadComponent: () =>
          import('../official-profile/official-profile.component').then(
            (m) => m.OfficialProfileComponent
          ),
        data: { title: 'Official Profile' }
      },
      {
        path: 'personal-profile',
        loadComponent: () =>
          import('./personal-profile.component').then(
            (m) => m.PersonalProfileComponent
          ),
        data: { title: 'Personal Profile' }
      }
    ]
  }
];
