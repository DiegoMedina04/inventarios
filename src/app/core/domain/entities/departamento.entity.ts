export class Departamento {
  id: number;
  nombre: string;
  descripcion: string;
  fechaCreacion: Date | null;
  fechaModificacion: Date | null;

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    fechaCreacion: Date | null,
    fechaModificacion: Date | null
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.fechaModificacion = fechaModificacion;
  }
}
