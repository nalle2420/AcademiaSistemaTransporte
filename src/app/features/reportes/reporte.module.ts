import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../shared/components/component.module';
import { ReporteListComponent } from './pages/reporte-list/reporte-list.component';
import { ReporteRoutingModule } from './reporte.routing.module';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxLookupModule } from 'devextreme-angular';
import dxDataGrid from 'devextreme/ui/data_grid';

@NgModule({
  declarations: [ReporteListComponent],
  imports: [ CommonModule,
    ReactiveFormsModule,
    ComponentModule ,
  ReporteRoutingModule,DxLookupModule, DxDateBoxModule, DxButtonModule, DxDataGridModule],
  exports: [ReporteListComponent],
  providers: [],
})
export class ReporteModule {}
