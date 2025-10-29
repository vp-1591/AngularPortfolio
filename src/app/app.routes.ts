// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Use loadComponent to lazy-load the component
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  // ... other routes
];
