import { BaseEntity } from "../../../sheared/base-entity";


export interface Empleado extends BaseEntity{
    empleadoId: number;
    nombre: string;
    apellido: string;
    puestoId: number;
  }

