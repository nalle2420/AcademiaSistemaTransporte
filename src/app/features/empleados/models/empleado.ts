import { BaseEntity } from "../../../shared/base-entity";


export interface Empleado extends BaseEntity{
    empleadoId: number;
    nombre: string;
    apellido: string;
    puestoId: number;
  }

