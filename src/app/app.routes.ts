import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Courses } from './courses/courses';
import { Schedule } from './schedule/schedule';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'courses', component: Courses },
  { path: 'schedule', component: Schedule },
];
