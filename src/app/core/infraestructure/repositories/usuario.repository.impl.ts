import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../domain/repositories/usuario.repository';
import { UsuarioApi } from '../api/usuario.api';

export class UsuarioRepositoryImpl implements UsuarioRepository {
  constructor(private usuariosApi: UsuarioApi = new UsuarioApi()) {}

  private usuarios: Usuario[] = [];

  async findAll(): Promise<Usuario[]> {
    return this.usuariosApi.findAll();
  }

  async findById(id: number): Promise<Usuario | null> {
    return this.usuariosApi.findById(id);
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.usuariosApi.findByEmail(email);
  }

  async create(usuario: Usuario): Promise<Usuario> {
    const existingUsuario = await this.findByEmail(usuario.email);
    if (existingUsuario) {
      throw new Error('Email already exists');
    }
    return await this.usuariosApi.create(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    const usuarioEncontrado = await this.findById(usuario.id);
    if (!usuarioEncontrado) {
      throw new Error('Usuario not found');
    }
    return await this.usuariosApi.update(usuario);
  }

  async delete(id: number): Promise<void> {
    const usuarioEncontrado = await this.findById(id);
    if (!usuarioEncontrado) {
      throw new Error('Usuario not found');
    }
    await this.usuariosApi.delete(id);
  }
}
