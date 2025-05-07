import { Asignacion } from '../entities/asignacion.entity';

export interface AsignacionRepository {
  findAll(): Promise<Asignacion[]>;
  findById(id: number): Promise<Asignacion | null>;
  create(asignacion: Asignacion): Promise<Asignacion>;
  update(asignacion: Asignacion): Promise<Asignacion>;
  delete(id: number): Promise<void>;
}
