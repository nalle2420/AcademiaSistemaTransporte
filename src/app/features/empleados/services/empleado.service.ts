import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { TransporteService } from '../../../services/transporte.service';
import { EmpleadoPorSucursalDto } from '../models/empleado-por-sucursal';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados:Array<Empleado>= []

  constructor(private transporteService: TransporteService) { }

  getEmpleados():Promise<Array<Empleado>>{
    return this.transporteService.get<Array<Empleado>>('empleado/empleadosTransporte');
  }

  getEmpleadosPorSucursal(id:number):Promise<Array<EmpleadoPorSucursalDto>>{
    return this.transporteService.getId<Array<EmpleadoPorSucursalDto>>('empleado/empleadosSucursal',id);
  }

  postEmpleados(empleado:Empleado):Promise<string>{
    return this.transporteService.post('empleado/guardar',JSON.stringify(empleado));

  }

  putEmpleados(empleado:Empleado):Promise<string>{
    return this.transporteService.put('empleado/editar',JSON.stringify(empleado));
  }


  addEmpleado(empleado:Empleado):void{
    this.empleados.push(empleado);
  }

  updateUser(empleado:Empleado){
    const {empleadoId, nombre, apellido,puestoId}= empleado;

    let empleadoDb:Empleado | undefined = this.empleados.find(x=> x.empleadoId == empleadoId);
  if (empleadoDb==undefined) return;

  empleadoDb.nombre=nombre;
  empleadoDb.apellido=apellido;
  empleadoDb.empleadoId=empleadoId;
  empleadoDb.puestoId=puestoId;
  }
}
