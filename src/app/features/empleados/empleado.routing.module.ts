import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListComponent } from './pages/empleado-list/empleado-list.component';

const ROUTES:Routes=[
  {
    path:'empleados',
    component:EmpleadoListComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [RouterModule],
})
export class EmpleadoRoutingModule {}
