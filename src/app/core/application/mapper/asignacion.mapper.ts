import { Asignacion } from '../../domain/entities/asignacion.entity';
import { AsignacionDTO } from '../../infraestructure/dto/asignacionDto';
import { UsuarioMapper } from './usuario.mapper';

export class AsignacionMapper {
  static toDomain(usuarioDto: AsignacionDTO): Asignacion {
    const userMapper = UsuarioMapper.toDomain(usuarioDto.user);
    return new Asignacion(
      usuarioDto.id,
      userMapper,
      null,
      usuarioDto.fecha_asignacion,
      usuarioDto.fecha_devolucion,
      usuarioDto.fecha_asignacion,
      usuarioDto.fecha_devolucion,
      true
    );
  }
}
