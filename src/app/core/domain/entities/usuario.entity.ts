export class Usuario {
  id: number;
  nombre: string;
  apellido: string | null;
  email: string;
  password: string;
  estado: boolean | null;

  constructor(
    id: number,
    nombre: string,
    apellido: string | null,
    email: string,
    password: string,
    estado: boolean | null
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.estado = estado;
  }
}
