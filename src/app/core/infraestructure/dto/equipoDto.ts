import { DepartamentoDto } from './departamento';

export class EquipoDTO {
  id: number;
  serial: string;
  ip: string;
  tipo: string;
  marca: string;
  modelo: string;
  estado: string;
  ubicacion_id: number;
  created_at: string;
  updated_at: string;
  ubicacion: DepartamentoDto;

  constructor(
    id: number,
    serial: string,
    ip: string,
    tipo: string,
    marca: string,
    modelo: string,
    estado: string,
    ubicacion_id: number,
    created_at: string,
    updated_at: string,
    ubicacion: DepartamentoDto
  ) {
    this.id = id;
    this.serial = serial;
    this.ip = ip;
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.estado = estado;
    this.ubicacion_id = ubicacion_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.ubicacion = ubicacion;
  }
}
