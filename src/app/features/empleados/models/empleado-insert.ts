import { BaseEntity } from "../../../shared/base-entity";

export interface EmpleadoInsertDto extends BaseEntity {
  identidad: string;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  puestoId: number;
  ciudadId: number;
  transporte: boolean;
}
