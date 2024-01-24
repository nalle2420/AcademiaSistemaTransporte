import { Injectable } from '@angular/core';
import { Permiso } from '../models/permiso';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {
  private permisos:Array<Permiso>= [];

  constructor() {

  }

  getPermiso(): Array<Permiso>{
    return this.permisos;
  }

  addPermiso(permiso:Permiso):void{
    this.permisos.push(permiso);
  }

  updatePermiso(permiso:Permiso){
    const {permisoId, nombreMenu, activo}= permiso;

    let permisoDb:Permiso | undefined = this.permisos.find(x=> x.permisoId == permisoId);
  if (permisoDb==undefined) return;

  permisoDb.permisoId=permisoId;
  permisoDb.nombreMenu=nombreMenu;
  permisoDb.activo=activo;
  }
}
