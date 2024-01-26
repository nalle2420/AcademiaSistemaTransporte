import { Injectable } from '@angular/core';
import { TransporteService } from '../../../services/transporte.service';
import { Transportista } from '../models/transportista';

@Injectable({
  providedIn: 'root'
})
export class TransportistaService {

  constructor(private transporteService: TransporteService) { }

  getTransportista():Promise<Array<Transportista>>{
    return this.transporteService.get<Array<Transportista>>('transportista/transportistas');
  }
}
