import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { TransporteService } from '../../../services/transporte.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados:Array<Empleado>= [
    {
      empleadoId:2,
     nombre:"Nalle",
     apellido:"reyes",
     puestoId:1,
     activo:true
  },{empleadoId:3,
 nombre:"Karla",
 apellido:"reyes",
 puestoId:1,
 activo:true}]

  constructor(private transporteService: TransporteService) { }

  getEmpleados():Promise<Array<Empleado>>{
    // const promesa= this.transporteService.get<any>('empleado/empleadosTransporte')
    // .then(data=>{
    //  return Promise.resolve(data.data);
    // }).catch(error)
    return this.transporteService.get<Array<Empleado>>('empleado/empleadosTransporte');
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
