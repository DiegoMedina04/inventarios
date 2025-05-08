import { Equipo } from './equipo.entity';
import { Usuario } from './usuario.entity';

export class Asignacion {
  id: number;
  usuario: Usuario;
  equipo: Equipo | null;
  fechaAsignacion: Date | null;
  fechaDevolucion: Date | null;
  fechaCreacion: Date | null;
  fechaModificacion: Date | null;
  estado: boolean | null;

  constructor(
    id: number,
    usuario: Usuario,
    equipo: Equipo | null,
    fechaAsignacion: Date | null,
    fechaDevolucion: Date | null,
    fechaCreacion: Date | null,
    fechaModificacion: Date | null,
    estado: boolean | null
  ) {
    this.id = id;
    this.usuario = usuario;
    this.equipo = equipo;
    this.fechaAsignacion = fechaAsignacion;
    this.fechaDevolucion = fechaDevolucion;
    this.fechaCreacion = fechaCreacion;
    this.fechaModificacion = fechaModificacion;
    this.estado = estado;
  }
}
