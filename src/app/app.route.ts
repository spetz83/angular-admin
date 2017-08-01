import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './components/index';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
