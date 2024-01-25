import { BaseEntity } from "../../../shared/base-entity";
import { ViajeDetalleDto } from "./viaje-detalle";

export interface Viajes extends BaseEntity {
  empleadoId: number,
 sucursalId: number,
  fecha: Date,
  transportistaId: number,
  viajeDetalle: ViajeDetalleDto
}
