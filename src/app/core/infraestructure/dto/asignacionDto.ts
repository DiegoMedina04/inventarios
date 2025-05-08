import { DepartamentoDto } from './departamento';
import { EquipoDTO } from './equipoDto';
import { UsuarioDTO } from './usuarioDto';

export class AsignacionDTO {
  id: number;
  user_id: number;
  equipo_id: number;
  fecha_asignacion: Date | null;
  fecha_devolucion: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
  ubicacion_id: number;
  user: UsuarioDTO;
  equipo: EquipoDTO;
  ubicacion: DepartamentoDto;

  constructor(
    id: number,
    user_id: number,
    equipo_id: number,
    fecha_asignacion: Date | null,
    fecha_devolucion: Date | null,
    created_at: Date | null,
    updated_at: Date | null,
    ubicacion_id: number,
    user: UsuarioDTO,
    equipo: EquipoDTO,
    ubicacion: DepartamentoDto
  ) {
    this.id = id;
    this.user_id = user_id;
    this.equipo_id = equipo_id;
    this.fecha_asignacion = fecha_asignacion;
    this.fecha_devolucion = fecha_devolucion;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.ubicacion_id = ubicacion_id;
    this.user = user;
    this.equipo = equipo;
    this.ubicacion = ubicacion;
  }
}
