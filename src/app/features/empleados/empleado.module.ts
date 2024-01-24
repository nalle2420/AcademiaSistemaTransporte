import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoListComponent } from './pages/empleado-list/empleado-list.component';
import { ComponentModule } from '../../shared/components/component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoRoutingModule } from './empleado.routing.module';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxNumberBoxModule, DxTextBoxModule } from 'devextreme-angular';
import dxDataGrid from 'devextreme/ui/data_grid';

@NgModule({
  declarations: [
    EmpleadoListComponent
  ],
  imports: [ CommonModule,
     ReactiveFormsModule,
     ComponentModule,
     EmpleadoRoutingModule,
     DxTextBoxModule,
    DxButtonModule,
  DxCheckBoxModule,
DxNumberBoxModule,DxDataGridModule],
  exports: [
    EmpleadoListComponent
  ],
  providers: [],
})
export class EmpleadoModule {}
