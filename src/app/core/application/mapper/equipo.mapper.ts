import { Equipo } from '../../domain/entities/equipo.entity';
import { EquipoDTO } from '../../infraestructure/dto/equipoDto';
import { DepartamentoMapper } from './departamento.mapper';

export class EquipoMapper {
  static toDomain(equipoDto: EquipoDTO): Equipo {
    const departamentoMapper = DepartamentoMapper.toDomain(equipoDto.ubicacion);
    return new Equipo(
      equipoDto.id,
      equipoDto.serial,
      equipoDto.ip,
      equipoDto.tipo,
      equipoDto.marca,
      equipoDto.modelo,
      equipoDto.estado,
      departamentoMapper,
      equipoDto.created_at,
      equipoDto.updated_at
    );
  }
}
