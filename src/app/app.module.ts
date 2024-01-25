import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisosListComponent } from './features/permisos/pages/permisos-list/permisos-list.component';
import { SucursalesAdminComponent } from './features/sucursales/pages/sucursales-admin/sucursales-admin.component';
import { ReporteListComponent } from './features/reportes/pages/reporte-list/reporte-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContentTypeInterceptor } from './shared/interceptor/content-type.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PermisosListComponent,
    SucursalesAdminComponent,
    ReporteListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: ContentTypeInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
