import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SucursalesAdminComponent } from './pages/sucursales-admin/sucursales-admin.component';

const ROUTES:Routes=[
  {
    path:'sucursales',
    component:SucursalesAdminComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [RouterModule],
})
export class SucursalRoutingModule {}
