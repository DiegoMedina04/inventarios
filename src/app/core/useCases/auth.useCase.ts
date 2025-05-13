import { Asignacion } from '../domain/entities/asignacion.entity';
import { LoginResponse } from '../domain/entities/loginResponse.entity';
import { AsignacionRepositoryImpl } from '../infraestructure/repositories/asignacion.repository';
import { AuthRepositoryImpl } from '../infraestructure/repositories/auth.repository.impl';

const loginResponseRepository = new AuthRepositoryImpl();

export function login(correo:string, clave:string): Promise<LoginResponse | null> {
  return loginResponseRepository.login(correo,clave);
}
