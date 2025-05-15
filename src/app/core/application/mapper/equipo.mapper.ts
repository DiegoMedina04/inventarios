import { Equipo } from '../../domain/entities/equipo.entity';
import { EquipoDTO } from '../../infraestructure/dto/equipoDto';
import { DepartamentoMapper } from './departamento.mapper';

export class EquipoMapper {
  static toDomain(equipoDto: EquipoDTO): Equipo {
    return new Equipo(
      equipoDto.ip,
      equipoDto.marca,
      equipoDto.modelo,
      equipoDto.procesador,
      equipoDto.memoria,
      equipoDto.tipoAlmacenamiento,
      equipoDto.almacenamiento,
      equipoDto.sistemaOperativo
    );
  }

  static toDTO(equipo: Equipo): EquipoDTO {
    return new EquipoDTO(
      equipo.ip,
      equipo.marca,
      equipo.modelo,
      equipo.procesador,
      equipo.memoria,
      equipo.tipoAlmacenamiento,
      equipo.almacenamiento,
      equipo.sistemaOperativo
    );
  }
}