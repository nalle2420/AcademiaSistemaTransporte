import { Injectable } from '@angular/core';
import { TransporteService } from '../../../services/transporte.service';
import { ReporteDto } from '../models/reporte-fecha-transportista';
import { ReportePrincipalRequeriment } from '../models/reporte-viaje-Requeriment';
import { Respuesta } from '../../../shared/models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private transporteService: TransporteService) { }

  postReportePorTransportista(datos:ReportePrincipalRequeriment):Promise<Respuesta<Array<ReporteDto>>>{

    return this.transporteService.post('reporte/viajes',JSON.stringify(datos));
  }


}
