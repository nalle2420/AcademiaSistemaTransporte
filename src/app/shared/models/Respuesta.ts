export interface Respuesta<T> {
  data: T;
  ok: boolean;
  codigo: string;
  mensaje: string;
}
