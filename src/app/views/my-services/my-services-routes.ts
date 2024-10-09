import { Routes } from '@angular/router';

export const myServicesRoutes: Routes = [
  {
    path: '',
    data: { title: 'My Services' },
    children: [
      {
        path: 'official-profile',
        loadComponent: () =>
          import('./official-profile/official-profile.component').then(
            (m) => m.OfficialProfileComponent
          ),
        data: { title: 'Official Profile' }
      },
      {
        path: 'personal-profile',
        loadComponent: () =>
          import('./personal-profile/personal-profile.component').then(
            (m) => m.PersonalProfileComponent
          ),
        data: { title: 'Personal Profile' }
      },
      {
        path: 'my-attendance',
        loadComponent: () =>
          import('./my-attendance/my-attendance.component').then(
            (m) => m.MyAttendanceComponent
          ),
        data: { title: 'My Attendance' }
      },
      {
        path: 'leave-request',
        loadComponent: () =>
          import('./leave-request/leave-request.component').then(
            (m) => m.LeaveRequestComponent
          ),
        data: { title: 'Leave Request' }
      },
      {
        path: 'resignation-request',
        loadComponent: () =>
          import('./resignation-request/resignation-request.component').then(
            (m) => m.ResignationRequestComponent
          ),
        data: { title: 'Resignation Request' }
      },
      {
        path: 'certificate-request',
        loadComponent: () =>
          import('./certificate-request/certificate-request.component').then(
            (m) => m.CertificateRequestComponent
          ),
        data: { title: 'Certificate Request' }
      },
      {
        path: 'work-from-outside',
        loadComponent: () =>
          import('./work-from-outside/work-from-outside.component').then(
            (m) => m.WorkFromOutsideComponent
          ),
        data: { title: 'Work From Outside' }
      },
    ]
  }
];
