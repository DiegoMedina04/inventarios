// src/app/core/infrastructure/dto/usuario.dto.ts
export class UsuarioDTO {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  password: string;
  remember_token: string | null;
  created_at: string | null;
  updated_at: string | null;
  estado: boolean | null;

  constructor(
    id: number,
    name: string,
    email: string,
    email_verified_at: string | null,
    password: string,
    remember_token: string | null,
    created_at: string | null,
    updated_at: string | null,
    estado: boolean | null
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.email_verified_at = email_verified_at;
    this.password = password;
    this.remember_token = remember_token;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.estado = estado;
  }
}
