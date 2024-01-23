import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './features/empleados/pages/empleado-list/empleado-list.component';
import { PermisosListComponent } from './features/permisos/pages/permisos-list/permisos-list.component';
import { ViajesRegistroComponent } from './features/viajes/pages/viajes-registro/viajes-registro.component';
import { SucursalesAdminComponent } from './features/sucursales/pages/sucursales-admin/sucursales-admin.component';
import { ReporteListComponent } from './features/reportes/pages/reporte-list/reporte-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent,
    PermisosListComponent,
    ViajesRegistroComponent,
    SucursalesAdminComponent,
    ReporteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
