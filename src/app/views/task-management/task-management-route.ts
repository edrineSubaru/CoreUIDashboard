import { Routes } from '@angular/router';

export const taskManagementRoutes: Routes = [
  {
    path: '',
    data: { title: 'Task Management' },
    children: [
      {
        path: 'manage-tasks',
        loadComponent: () =>
          import('./tasks/tasks.component').then(
            (m) => m.TasksComponent
          ),
        data: { title: 'Manage Tasks' }
      },      
      
    ]
  }
];
