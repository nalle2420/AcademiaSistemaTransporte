import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoListComponent } from './pages/empleado-list/empleado-list.component';
import { ComponentModule } from '../../shared/components/component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoRoutingModule } from './empleado.routing.module';

@NgModule({
  declarations: [
    EmpleadoListComponent
  ],
  imports: [ CommonModule,
     ReactiveFormsModule,
     ComponentModule,
     EmpleadoRoutingModule ],
  exports: [
    EmpleadoListComponent
  ],
  providers: [],
})
export class EmpleadoModule {}
