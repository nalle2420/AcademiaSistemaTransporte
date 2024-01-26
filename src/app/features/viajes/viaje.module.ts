import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajesRegistroComponent } from './pages/viajes-registro/viajes-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../shared/components/component.module';
import { ViajeRoutingModule } from './viaje.routing.module';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxLookupModule, DxNumberBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [ViajesRegistroComponent],
  imports: [ CommonModule,
    ReactiveFormsModule,
    ComponentModule,
  ViajeRoutingModule,
  DxSelectBoxModule,
  DxDateBoxModule,
  DxDataGridModule,
  DxLookupModule,
  DxTextBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
 ],
  exports: [ViajesRegistroComponent],
  providers: [],
})
export class ViajeModule {}
