import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: 'about',
    component: About
  },
  {
    path: '**',
    component: NotFound
  }  
];
