import { Departamento } from '../entities/departamento.entity';

export interface DepartamentoRepository {
  findAll(): Promise<Departamento[]>;
  findById(id: number): Promise<Departamento | null>;
  create(departamento: Departamento): Promise<Departamento>;
  update(departamento: Departamento): Promise<Departamento>;
  delete(id: number): Promise<void>;
}
