import { Departamento } from '../domain/entities/departamento.entity';
import { DepartamentoRepositoryImpl } from '../infraestructure/repositories/departamento.repository';

const DepartamentoRepository = new DepartamentoRepositoryImpl();
export function getDepartamentoById(id: number): Promise<Departamento | null> {
  return DepartamentoRepository.findById(id);
}
export function getAllDepartamentos(): Promise<Departamento[]> {
  return DepartamentoRepository.findAll();
}
export function createDepartamento(
  departamento: Departamento
): Promise<Departamento> {
  return DepartamentoRepository.create(departamento);
}
export function updateDepartamento(
  departamento: Departamento
): Promise<Departamento> {
  return DepartamentoRepository.update(departamento);
}
export function deleteDepartamento(id: number): Promise<void> {
  return DepartamentoRepository.delete(id);
}
