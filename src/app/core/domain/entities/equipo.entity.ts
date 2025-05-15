import { Departamento } from './departamento.entity';

export class Equipo {

  ip: string;
  marca: string;
  modelo: string;
  procesador: string;
  memoria: string;
  tipoAlmacenamiento: string;
  almacenamiento: string;
  sistemaOperativo: string;


  constructor(

    ip: string,
    marca: string,
    modelo: string,
    procesador: string,
    memoria: string,
    tipoAlmacenamiento: string,
    almacenamiento: string,
    sistemaOperativo: string,

  ) {

    this.ip = ip;
    this.marca = marca;
    this.modelo = modelo;
    this.procesador= procesador;
    this.memoria = memoria;
    this.tipoAlmacenamiento = tipoAlmacenamiento;
    this.almacenamiento = almacenamiento;
    this.sistemaOperativo = sistemaOperativo;

  }
}
