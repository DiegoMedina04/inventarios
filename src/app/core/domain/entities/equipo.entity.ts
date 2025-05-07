export class Equipo {
  id: number;
  nombre: string;
  marca: string;
  modelo: string;
  procesador: string;
  memoria: string;
  tipoAlmacenamiento: string;
  almacenamiento: string;
  sistemaOperativo: string;
  serial: string;
  serialEmpresa: string;
  bateria: string;
  mac: string;
  ipv4: string;
  nombreLogico: string;
  tipoConexion: string;

  constructor(
    id: number,
    nombre: string,
    marca: string,
    modelo: string,
    procesador: string,
    memoria: string,
    tipoAlmacenamiento: string,
    almacenamiento: string,
    sistemaOperativo: string,
    serial: string,
    serialEmpresa: string,
    bateria: string,
    mac: string,
    ipv4: string,
    nombreLogico: string,
    tipoConexion: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.modelo = modelo;
    this.procesador = procesador;
    this.memoria = memoria;
    this.tipoAlmacenamiento = tipoAlmacenamiento;
    this.almacenamiento = almacenamiento;
    this.sistemaOperativo = sistemaOperativo;
    this.serial = serial;
    this.serialEmpresa = serialEmpresa;
    this.bateria = bateria;
    this.mac = mac;
    this.ipv4 = ipv4;
    this.nombreLogico = nombreLogico;
    this.tipoConexion = tipoConexion;
  }
}
