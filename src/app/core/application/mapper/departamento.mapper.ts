import { Asignacion } from '../../domain/entities/asignacion.entity';
import { Departamento } from '../../domain/entities/departamento.entity';
import { AsignacionDTO } from '../../infraestructure/dto/asignacionDto';
import { DepartamentoDto } from '../../infraestructure/dto/departamento';
import { UsuarioMapper } from './usuario.mapper';

export class DepartamentoMapper {
  static toDomain(departamentoDto: DepartamentoDto): Departamento {
    return new Departamento(
      departamentoDto.id,
      departamentoDto.nombre,
      departamentoDto.descripcion,
      departamentoDto.created_at,
      departamentoDto.updated_at
    );
  }
}
