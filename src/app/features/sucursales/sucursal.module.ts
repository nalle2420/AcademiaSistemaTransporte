import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalesAdminComponent } from './pages/sucursales-admin/sucursales-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../shared/components/component.module';
import { SucursalRoutingModule } from './sucursal.routing.module';
import { DxButtonModule, DxDataGridModule, DxLookupModule, DxNumberBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [SucursalesAdminComponent],
  imports: [ CommonModule,
    ReactiveFormsModule,
    ComponentModule,
  SucursalRoutingModule,
   DxLookupModule,DxDataGridModule,
  DxNumberBoxModule,DxButtonModule],
  exports: [SucursalesAdminComponent],
  providers: [],
})
export class SucursalModule {}
