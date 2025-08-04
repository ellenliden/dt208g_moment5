import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Courses } from './courses/courses';
import { Schedule } from './schedule/schedule';

export const routes: Routes = [
  { path: 'contact', component: Contact },
  { path: 'courses', component: Courses },
  { path: 'schedule', component: Schedule },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
