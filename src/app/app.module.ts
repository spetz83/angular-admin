import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.route';
import { AppComponent, DashboardComponent, CustomersComponent, AppsComponent, UsersComponent, AuthCodesComponent, OrdersComponent, PartsComponent } from './components';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    AppsComponent,
    UsersComponent,
    AuthCodesComponent,
    OrdersComponent,
    PartsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
