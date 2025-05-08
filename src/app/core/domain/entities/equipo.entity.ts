import { Departamento } from './departamento.entity';

export class Equipo {
  id: number;
  serial: string;
  ip: string;
  tipo: string;
  marca: string;
  modelo: string;
  estado: string;
  departamento: Departamento;
  fechaCreacion: string;
  fechaActualizacion: string;

  constructor(
    id: number,
    serial: string,
    ip: string,
    tipo: string,
    marca: string,
    modelo: string,
    estado: string,
    departamento: Departamento,
    fechaCreacion: string,
    fechaActualizacion: string
  ) {
    this.id = id;
    this.serial = serial;
    this.ip = ip;
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.estado = estado;
    this.departamento = departamento;
    this.fechaCreacion = fechaCreacion;
    this.fechaActualizacion = fechaActualizacion;
  }
}
