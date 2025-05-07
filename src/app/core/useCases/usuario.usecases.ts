import { Usuario } from '../domain/entities/usuario.entity';
import { UsuarioRepositoryImpl } from '../infraestructure/repositories/usuario.repository.impl';

const usuarioRepository = new UsuarioRepositoryImpl();

export async function getUsuarioById(id: number): Promise<Usuario | null> {
  return await usuarioRepository.findById(id);
}
export async function getAllUsuarios(): Promise<Usuario[]> {
  return await usuarioRepository.findAll();
}
export async function createUsuario(usuario: Usuario): Promise<Usuario> {
  return await usuarioRepository.create(usuario);
}
export async function updateUsuario(usuario: Usuario): Promise<Usuario> {
  return await usuarioRepository.update(usuario);
}
export async function deleteUsuario(id: number): Promise<void> {
  return await usuarioRepository.delete(id);
}
export async function getUsuarioByEmail(
  email: string
): Promise<Usuario | null> {
  return await usuarioRepository.findByEmail(email);
}
