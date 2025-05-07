import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioDTO } from '../../infraestructure/dto/usuarioDto';

export class UsuarioMapper {
  static toDomain(usuarioDto: UsuarioDTO): Usuario {
    return new Usuario(
      usuarioDto.id,
      usuarioDto.name,
      null,
      usuarioDto.email,
      usuarioDto.password,
      usuarioDto.estado
    );
  }

  static toDTO(usuario: Usuario): UsuarioDTO {
    return new UsuarioDTO(
      usuario.id,
      usuario.nombre,
      usuario.email,
      null,
      usuario.password,
      null,
      null,
      null,
      usuario.estado
    );
  }
}
