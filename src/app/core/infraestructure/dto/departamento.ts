export class DepartamentoDto {
  id: number;
  nombre: string;
  descripcion: string;
  created_at: string | null;
  updated_at: string | null;

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    created_at: string | null,
    updated_at: string | null
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
