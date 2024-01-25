import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        loadChildren:()=> import('./features/empleados/empleado.module').then(m=>m.EmpleadoModule)
      },
        {
          path:'',
          loadChildren:()=> import('./features/viajes/viaje.module').then(m=>m.ViajeModule)
        }

    ]
  },
  {
    path:'**',pathMatch: 'full',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
