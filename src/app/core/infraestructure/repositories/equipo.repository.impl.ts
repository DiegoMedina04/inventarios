import { Equipo } from '../../domain/entities/equipo.entity';
import { EquipoRepository } from '../../domain/repositories/equipo.repository';
import { EquipoApi } from '../api/equipo.api';

export class EquipoRepositoryImpl implements EquipoRepository {
  constructor(private equipoApi: EquipoApi = new EquipoApi()) {}

  findAll(): Promise<Equipo[]> {
    return this.equipoApi.findAll();
  }
  findById(id: number): Promise<Equipo | null> {
    return this.equipoApi.findById(id);
  }
  create(equipo: Equipo): Promise<Equipo> {
    return this.equipoApi.create(equipo);
  }
  update(equipo: Equipo): Promise<Equipo> {
    return this.equipoApi.update(equipo);
  }
  delete(id: number): Promise<void> {
    return this.equipoApi.delete(id);
  }
}
