import { Usuario } from '../../domain/entities/usuario.entity';

export class UsuarioApi {
  async findAll(): Promise<Usuario[]> {
    const usuarios: Usuario[] = [
      new Usuario(
        1,
        'Juan',
        'Pérez',
        'juan.perez@example.com',
        'password123',
        'admin',
        true
      ),
      new Usuario(
        2,
        'Ana',
        'Gómez',
        'ana.gomez@example.com',
        'password456',
        'usuario',
        true
      ),
      new Usuario(
        3,
        'Luis',
        'Martínez',
        'luis.martinez@example.com',
        'password789',
        'usuario',
        false
      ),
      new Usuario(
        4,
        'Carlos',
        'Sánchez',
        'carlos.sanchez@example.com',
        'password000',
        'admin',
        true
      ),
      new Usuario(
        5,
        'Maria',
        'López',
        'maria.lopez@example.com',
        'password111',
        'usuario',
        true
      ),
      new Usuario(
        6,
        'José',
        'Díaz',
        'jose.diaz@example.com',
        'password222',
        'usuario',
        false
      ),
      new Usuario(
        7,
        'Pedro',
        'Ramírez',
        'pedro.ramirez@example.com',
        'password333',
        'admin',
        true
      ),
    ];
    return usuarios;
  }

  async findById(id: number): Promise<Usuario | null> {
    return null;
  }
  async findByEmail(email: string): Promise<Usuario | null> {
    return null;
  }
  async create(usuario: Usuario): Promise<Usuario> {
    return usuario;
  }
  async update(usuario: Usuario): Promise<Usuario> {
    return usuario;
  }
  async delete(id: number): Promise<void> {
    return;
  }
}
