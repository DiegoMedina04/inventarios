import { Departamento } from '../../domain/entities/departamento.entity';
import { DepartamentoRepository } from '../../domain/repositories/departamento.repository';
import { DepartamentoApi } from '../api/departamento.api';

export class DepartamentoRepositoryImpl implements DepartamentoRepository {
  constructor(
    private departamentoApi: DepartamentoApi = new DepartamentoApi()
  ) {}

  findAll(): Promise<Departamento[]> {
    return this.departamentoApi.getDepartamentos();
  }
  findById(id: number): Promise<Departamento | null> {
    return this.departamentoApi.getDepartamentoById(id);
  }
  create(departamento: Departamento): Promise<Departamento> {
    return this.departamentoApi.createDepartamento(departamento);
  }
  update(departamento: Departamento): Promise<Departamento> {
    return this.departamentoApi.createDepartamento(departamento);
  }
  delete(id: number): Promise<void> {
    return this.departamentoApi.createDepartamento(id);
  }
}
