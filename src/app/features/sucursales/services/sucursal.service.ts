import { Injectable } from '@angular/core';
import { TransporteService } from '../../../services/transporte.service';
import { Sucursal } from '../models/sucursal';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  constructor(private transporteService: TransporteService) { }


  getSucursales():Promise<Array<Sucursal>>{
    return this.transporteService.get<Array<Sucursal>>('sucursales/sucursales');
  }
}
