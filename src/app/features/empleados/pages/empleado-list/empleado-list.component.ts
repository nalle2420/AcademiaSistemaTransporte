import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styles: ``
})
export class EmpleadoListComponent {
  empleados: Array<Empleado>=[];

 constructor() {
     this.empleados.push({
      empleadoId: 2,
      nombre: "Nalle",
      apellido: "Reyes",
      puestoId:  1,
      activo: true
     },{
      empleadoId: 3,
      nombre: "Nalle",
      apellido: "Reyes",
      puestoId:  1,
      activo: true
    });

  let [,,empleado]=this.empleados;
  const empleado2= this.empleados[0];

  let {nombre}= empleado;

  console.log(nombre);

 }
}
