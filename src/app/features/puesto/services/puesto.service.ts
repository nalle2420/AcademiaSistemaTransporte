import { Injectable } from '@angular/core';
import { Puesto } from '../models/puesto';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  private puestos:Array<Puesto>= [];

  constructor() { }

  getPuestos(): Array<Puesto>{
    return this.puestos;
  }

  addPuesto(puestos:Puesto):void{
    this.puestos.push(puestos);
  }

  updatePuestos(puesto:Puesto){
    const {puestoId, nombre, activo}= puesto;

    let puestoDb:Puesto | undefined = this.puestos.find(x=> x.puestoId == puestoId);
  if (puestoDb==undefined) return;

  puestoDb.puestoId=puestoId;
  puestoDb.nombre=nombre;
  puestoDb.activo=activo;
  }
}
