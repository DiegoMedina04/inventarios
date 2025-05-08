import { Asignacion } from '../domain/entities/asignacion.entity';
import { AsignacionRepositoryImpl } from '../infraestructure/repositories/asignacion.repository';

const asignacionRepository = new AsignacionRepositoryImpl();

export function asignar(): Promise<Asignacion[]> {
  return asignacionRepository.findAll();
}
