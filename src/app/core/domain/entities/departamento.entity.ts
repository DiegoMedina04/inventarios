export class Departamento {
  id: number;
  nombre: string;
  descripcion: string;
  fechaCreacion: Date;
  fechaModificacion: Date;
  estado: boolean;

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    fechaCreacion: Date,
    fechaModificacion: Date,
    estado: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.fechaModificacion = fechaModificacion;
    this.estado = estado;
  }
}
