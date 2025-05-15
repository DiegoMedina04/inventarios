export interface DiscoDto {
  tipoTecnologiaDisco: string;
  capacidadGb: number;
  marca: string;
  estado: string;
  modelo: string;
  horasUso: number;
}

export interface ModuloRamDto {
  capacidadGb: number;
  tipoMemoriaRam: string;
  velocidadMHz: number;
}

export interface PerifericoDto {
  nombre: string;
  tipo: string;
  marca: string;
  modelo: string;
  serial: string;
  codigo: string;
}

export interface ConfiguracionRedDto {
  tipo: string;
  direccionMac: string;
  ipv4: string;
}

export interface TarjetaVideoDto {
  esIntegrada: boolean;
  nombre: string;
}

export interface SoftwareInstaladoDto {
  nombre: string;
}

export class Equipo {
  tipoComputador: string;
  marcaModelo: string;
  procesador: string;
  numeroSerie: string;
  codigo: string;
  velocidadCpu: string;
  estadoComputador: string;
  nombreComputador: string;
  discos: DiscoDto[];
  modulosRam: ModuloRamDto[];
  perifericos: PerifericoDto[];
  configuracionRed: ConfiguracionRedDto;
  tarjetasVideo: TarjetaVideoDto[];
  sistemaOperativo: string;
  licenciaSistemaOperativo: boolean;
  antivirusInstalado: boolean;
  cargador: boolean;
  ubicacion: string;
  nombreAntivirus: string;
  fallasDetectadas: string;
  softwaresInstalados: SoftwareInstaladoDto[];
  constructor(
    tipoComputador: string,
    marcaModelo: string,
    procesador: string,
    numeroSerie: string,
    codigo: string,
    velocidadCpu: string,
    estadoComputador: string,
    nombreComputador: string,
    discos: DiscoDto[],
    modulosRam: ModuloRamDto[],
    perifericos: PerifericoDto[],
    configuracionRed: ConfiguracionRedDto,
    tarjetasVideo: TarjetaVideoDto[],
    sistemaOperativo: string,
    licenciaSistemaOperativo: boolean,
    antivirusInstalado: boolean,
    cargador: boolean,
    ubicacion: string,
    nombreAntivirus: string,
    fallasDetectadas: string,
    softwaresInstalados: SoftwareInstaladoDto[]
  ) {
    this.tipoComputador = tipoComputador;
    this.marcaModelo = marcaModelo;
    this.procesador = procesador;
    this.numeroSerie = numeroSerie;
    this.codigo = codigo;
    this.velocidadCpu = velocidadCpu;
    this.estadoComputador = estadoComputador;
    this.nombreComputador = nombreComputador;
    this.discos = discos;
    this.modulosRam = modulosRam;
    this.perifericos = perifericos;
    this.configuracionRed = configuracionRed;
    this.tarjetasVideo = tarjetasVideo;
    this.sistemaOperativo = sistemaOperativo;
    this.licenciaSistemaOperativo = licenciaSistemaOperativo;
    this.antivirusInstalado = antivirusInstalado;
    this.cargador = cargador;
    this.ubicacion = ubicacion;
    this.nombreAntivirus = nombreAntivirus;
    this.fallasDetectadas = fallasDetectadas;
    this.softwaresInstalados = softwaresInstalados;
  }
}
