import { EmpleadoInsertDto } from "./empleado-insert";

export interface EmpleadoEditDto extends EmpleadoInsertDto {
  empleadoId: number;
}
