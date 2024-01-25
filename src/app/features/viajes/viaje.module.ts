import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajesRegistroComponent } from './pages/viajes-registro/viajes-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../shared/components/component.module';
import { ViajeRoutingModule } from './viaje.routing.module';
import { DxSelectBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [ViajesRegistroComponent],
  imports: [ CommonModule,
    ReactiveFormsModule,
    ComponentModule,
  ViajeRoutingModule,
  DxSelectBoxModule
 ],
  exports: [ViajesRegistroComponent],
  providers: [],
})
export class ViajeModule {}
