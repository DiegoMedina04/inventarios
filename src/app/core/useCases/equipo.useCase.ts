import { Equipo } from '../domain/entities/equipo.entity';
import { EquipoRepositoryImpl } from '../infraestructure/repositories/equipo.repository.impl';

const equipoRepository = new EquipoRepositoryImpl();

export async function getEquipoById(id: number): Promise<Equipo | null> {
  return await equipoRepository.findById(id);
}
export async function getAllEquipos(): Promise<Equipo[]> {
  return await equipoRepository.findAll();
}
export async function createEquipo(equipo: Equipo): Promise<Equipo> {
  return await equipoRepository.create(equipo);
}
export async function updateEquipo(equipo: Equipo): Promise<Equipo> {
  return await equipoRepository.update(equipo);
}
export async function deleteEquipo(id: number): Promise<void> {
  return await equipoRepository.delete(id);
}
