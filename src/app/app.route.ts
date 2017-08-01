import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent, CustomersComponent, AppsComponent, UsersComponent, AuthCodesComponent, OrdersComponent, PartsComponent } from './components/index';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'apps',
    component: AppsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'auth-codes',
    component: AuthCodesComponent
  },
  {
    path: 'orders',
    component: CustomersComponent
  },
  {
    path: 'parts',
    component: CustomersComponent
  }
];
