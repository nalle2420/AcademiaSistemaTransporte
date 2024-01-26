import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ReporteListComponent } from './pages/reporte-list/reporte-list.component';

const ROUTES:Routes=[
  {
    path:'reportes',
    component:ReporteListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [RouterModule],
})
export class ReporteRoutingModule {}
