import { BaseEntity } from "../../../shared/base-entity";
import { ViajeDetalleDto } from "./viaje-detalle";

export interface Viajes  {
  usuarioId: number,
 sucursalId: number,
  fecha: Date,
  transportistaId: number,
  totalDistancia: number,
  listaDetalle: Array<ViajeDetalleDto>
}

export interface ViajeResponseDto extends Viajes {
    viajeId: number;
}
