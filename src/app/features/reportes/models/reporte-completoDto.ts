export interface ReporteCompletoDto {
  viajeID: number;
  empleadoNombre: string;
  empleadoApellido: string;
  sucursalNombre: string;
  viajeFecha: string;
  totalDistancia: number;
  totalTarifaPorDistancia: number;
  detallesViaje: DetalleViajeDto[];
}

export interface DetalleViajeDto {
  viajeID: number;
  empleadoId: number;
  empleadoNombreApellido: string;
  distanciaKm: number;
}
