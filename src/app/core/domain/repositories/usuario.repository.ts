import { Usuario } from '../entities/usuario.entity';

export interface UsuarioRepository {
  findAll(): Promise<Usuario[]>;
  findById(id: number): Promise<Usuario | null>;
  create(usuario: Usuario): Promise<Usuario>;
  update(usuario: Usuario): Promise<Usuario>;
  delete(id: number): Promise<void>;

  findByEmail(email: string): Promise<Usuario | null>;
}
