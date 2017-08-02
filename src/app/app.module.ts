import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.route';
import { AppComponent, DashboardComponent, CustomersComponent, AppsComponent, UsersComponent, AuthCodesComponent, OrdersComponent, PartsComponent } from './components';
import { UserAddUpdateComponent } from './components/users/forms/user-add-update/user-add-update.component';
import { RolesComponent } from './components/users/roles/roles.component';
import { RoleAddUpdateComponent } from './components/users/forms/role-add-update/role-add-update.component';
import { TileService } from './services/tile.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    AppsComponent,
    UsersComponent,
    AuthCodesComponent,
    OrdersComponent,
    PartsComponent,
    UserAddUpdateComponent,
    RolesComponent,
    RoleAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    TileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
