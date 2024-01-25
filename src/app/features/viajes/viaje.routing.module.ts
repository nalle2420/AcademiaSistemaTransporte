import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ViajesRegistroComponent } from './pages/viajes-registro/viajes-registro.component';

const ROUTES:Routes=[
  {
    path:'viajes',
    component:ViajesRegistroComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [RouterModule],
})
export class ViajeRoutingModule {}
