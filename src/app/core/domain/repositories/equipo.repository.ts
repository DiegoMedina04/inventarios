import { Equipo } from '../entities/equipo.entity';

export interface EquipoRepository {
  findAll(): Promise<Equipo[]>;
  findById(id: number): Promise<Equipo | null>;
  create(Equipo: Equipo): Promise<Equipo>;
  update(Equipo: Equipo): Promise<Equipo>;
  delete(id: number): Promise<void>;
}
