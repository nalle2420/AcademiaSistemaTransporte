import { Injectable } from '@angular/core';
import { TransporteService } from '../../../services/transporte.service';
import { ViajeResponseDto, Viajes } from '../models/viaje';
import { Respuesta } from '../../../shared/models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private transporteService: TransporteService) { }

  postViajes(viaje:Viajes):Promise<Respuesta<ViajeResponseDto>>{
    return this.transporteService.post('registro/viaje',JSON.stringify(viaje));
  }
}
