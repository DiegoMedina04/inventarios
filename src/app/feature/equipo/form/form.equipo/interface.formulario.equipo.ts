import {
  ConfiguracionRedDto,
  DiscoDto,
  ModuloRamDto,
  PerifericoDto,
  SoftwareInstaladoDto,
  TarjetaVideoDto,
} from '../../../../core/domain/entities/equipo.entity';

export class EquipoFormulario {
  tipoComputador: string = '';
  marcaModelo: string = '';
  procesador: string = '';
  numeroSerie: string = '';
  codigo: string = '';
  velocidadCpu: string = '';
  estadoComputador: string = '';
  nombreComputador: string = '';
  discos: DiscoDto[] = [
    {
      tipoTecnologiaDisco: '',
      capacidadGb: 0,
      marca: '',
      estado: '',
      modelo: '',
      horasUso: 0,
    },
  ];
  modulosRam: ModuloRamDto[] = [
    {
      capacidadGb: 0,
      tipoMemoriaRam: '',
      velocidadMHz: 0,
    },
  ];
  perifericos: PerifericoDto[] = [
    {
      nombre: '',
      tipo: '',
      marca: '',
      modelo: '',
      serial: '',
      codigo: '',
    },
  ];
  configuracionRed: ConfiguracionRedDto = {
    tipo: '',
    direccionMac: '',
    ipv4: '',
  };
  tarjetasVideo: TarjetaVideoDto[] = [
    {
      esIntegrada: false,
      nombre: '',
    },
  ];
  sistemaOperativo: string = '';
  licenciaSistemaOperativo: boolean = false;
  antivirusInstalado: boolean = false;
  cargador: boolean = false;
  ubicacion: string = '';
  nombreAntivirus: string = '';
  fallasDetectadas: string = '';
  softwaresInstalados: SoftwareInstaladoDto[] = [];
}
