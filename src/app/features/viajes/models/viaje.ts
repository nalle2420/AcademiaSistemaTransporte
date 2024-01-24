import { BaseEntity } from "../../../shared/base-entity";

export interface Viajes extends BaseEntity {
  viajeId: number,
  empleadoId: number,
 sucursalId: number,
  fecha: Date,
  transportistaId: number,
  totalDistancia: number,
  montoViaje: number
}
