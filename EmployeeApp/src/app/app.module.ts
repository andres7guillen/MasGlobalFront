import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { Connections } from './services/conn';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Connections],
  bootstrap: [AppComponent]
})
export class AppModule { }
