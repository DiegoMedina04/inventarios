import { Asignacion } from '../../domain/entities/asignacion.entity';
import { AsignacionRepository } from '../../domain/repositories/asignacion.repository';
import { AsignacionApi } from '../api/asignacion.api';

export class AsignacionRepositoryImpl implements AsignacionRepository {
  constructor(private asignacionApi: AsignacionApi = new AsignacionApi()) {}

  findAll(): Promise<Asignacion[]> {
    return this.asignacionApi.getAsignaciones();
  }
  findById(id: number): Promise<Asignacion | null> {
    throw new Error('Method not implemented.');
  }
  create(asignacion: Asignacion): Promise<Asignacion> {
    throw new Error('Method not implemented.');
  }
  update(asignacion: Asignacion): Promise<Asignacion> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
