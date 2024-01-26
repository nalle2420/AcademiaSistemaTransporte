import { Injectable } from '@angular/core';
import { TransporteService } from '../../../services/transporte.service';
import { Sucursal } from '../models/sucursal';
import { SucursalPorEmpleadoDtoReq } from '../models/sucursal-por-empleadoDto';
import { Respuesta } from '../../../shared/models/Respuesta';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  constructor(private transporteService: TransporteService) { }


  getSucursales():Promise<Array<Sucursal>>{
    return this.transporteService.get<Array<Sucursal>>('sucursales/sucursales');
  }

  getSucursalesNoVinculadas(empleadoid:number):Promise<Array<Sucursal>>{
    return this.transporteService.get<Array<Sucursal>>(`sucursales/nosucursal?empleadoID=${empleadoid}`);
  }

  getSucursalesVinculadas(empleadoid:number):Promise<Array<SucursalPorEmpleadoDtoReq>>{
    return this.transporteService.get<Array<SucursalPorEmpleadoDtoReq>>(`sucursales/sucursalvinculada?empleadoID=${empleadoid}`);
  }

  postSucursalPorEmpleado(relacionSucursal:SucursalPorEmpleadoDtoReq):Promise<Respuesta<SucursalPorEmpleadoDtoReq>>{
    return this.transporteService.post('sucursales/relacion',JSON.stringify(relacionSucursal));
  }
}
