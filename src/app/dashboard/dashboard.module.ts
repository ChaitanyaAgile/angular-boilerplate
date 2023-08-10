import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
