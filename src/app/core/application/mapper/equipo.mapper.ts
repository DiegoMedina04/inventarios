import {
  DiscoDto,
  Equipo,
  ModuloRamDto,
  PerifericoDto,
  ConfiguracionRedDto,
  TarjetaVideoDto,
  SoftwareInstaladoDto,
} from '../../domain/entities/equipo.entity';
import {
  DiskDto,
  EquipoDTO,
  NetworkConfigurationDto,
  PeripheralDto,
  RamModuleDto,
  SoftwareInstalledDto,
  VideoCardDto,
} from '../../infraestructure/dto/equipoDto';
import { DepartamentoMapper } from './departamento.mapper';

export class EquipoMapper {
  static toDomain(dto: EquipoDTO): Equipo {
    const diskMappeados = this.mapperDiskDomain(dto);
    const ramMappeados = this.mapperRamDomain(dto.ramModules);
    const perifericosMappeados = this.mapperPerifericosDomain(dto.peripherals);
    const softwareMappeados = this.mapperSoftwareDomain(dto.softwaresInstalled);
    const configuracionRedMappeada = this.mapperConfiguracionRedDomain(
      dto.networkConfiguration
    );
    const videoCardsMappeadas = this.mapperVideoCardsDomain(dto.videoCards);

    return new Equipo(
      dto.computerType,
      dto.brandModel,
      dto.processor,
      dto.serialNumber,
      dto.code,
      dto.cpuSpeed,
      dto.computerStatus,
      dto.computerName,
      diskMappeados,
      ramMappeados,
      perifericosMappeados,
      configuracionRedMappeada,
      videoCardsMappeadas,
      dto.operatingSystem,
      dto.operatingSystemLicense,
      dto.antivirusInstalled,
      dto.charger,
      dto.ubication,
      dto.antivirusName,
      dto.detectedFaults,
      softwareMappeados
    );
  }

  static toDTO(domain: Equipo): EquipoDTO {
    return new EquipoDTO(
      domain.tipoComputador,
      domain.marcaModelo,
      domain.procesador,
      domain.numeroSerie,
      domain.codigo,
      domain.velocidadCpu,
      domain.estadoComputador,
      domain.nombreComputador,
      this.mapperDiscoDto(domain.discos),
      this.mapperRamDto(domain.modulosRam),
      this.mapperPerifericosDto(domain.perifericos),
      this.mapperConfiguracionRedDto(domain.configuracionRed),
      this.mapperVideoCardsDto(domain.tarjetasVideo),
      domain.sistemaOperativo,
      domain.licenciaSistemaOperativo,
      domain.antivirusInstalado,
      domain.cargador,
      domain.ubicacion,
      domain.nombreAntivirus,
      domain.fallasDetectadas,
      this.mapperSoftwareDto(domain.softwaresInstalados)
    );
  }

  static mapperDiskDomain(dto: EquipoDTO): DiscoDto[] {
    return dto.disks.map((disk) => ({
      marca: disk.brand,
      modelo: disk.model,
      tipoTecnologiaDisco: disk.diskTechnologyType,
      capacidadGb: disk.capacityGb,
      estado: disk.status,
      horasUso: disk.usageHours,
    }));
  }
  static mapperRamDomain(rams: RamModuleDto[]): ModuloRamDto[] {
    return rams.map((ram) => ({
      capacidadGb: ram.capacityGb,
      tipoMemoriaRam: ram.memoryRamType,
      velocidadMHz: ram.speedMHz,
    }));
  }
  static mapperPerifericosDomain(perifericos: PeripheralDto[]): PerifericoDto[] {
    return perifericos.map((periferico) => ({
      nombre: periferico.name,
      serial: periferico.serial,
      marca: periferico.brand,
      modelo: periferico.model,
      tipo: periferico.type,
      codigo: periferico.code,
    }));
  }

  static mapperSoftwareDomain(
    softwares: SoftwareInstalledDto[]
  ): SoftwareInstaladoDto[] {
    return softwares.map((software) => ({
      nombre: software.name,
    }));
  }
  static mapperConfiguracionRedDomain(
    configuracionRed: NetworkConfigurationDto
  ): ConfiguracionRedDto {
    return {
      tipo: configuracionRed.type,
      direccionMac: configuracionRed.macAddress,
      ipv4: configuracionRed.ipv4,
    };
  }
  static mapperVideoCardsDomain(videoCards: VideoCardDto[]): TarjetaVideoDto[] {
    return videoCards.map((videoCard) => ({
      esIntegrada: videoCard.isIntegrated,
      nombre: videoCard.name,
    }));
  }

//Domain to DTO

  static mapperDiscoDto(discos: DiscoDto[]): DiskDto[] {
    return discos.map((disco) => ({
      brand: disco.marca,
      model: disco.modelo,
      diskTechnologyType: disco.tipoTecnologiaDisco,
      capacityGb: disco.capacidadGb,
      status: disco.estado,
      usageHours: disco.horasUso,
    }));
  }

  static mapperRamDto(rams: ModuloRamDto[]): RamModuleDto[] {
    return rams.map((ram) => ({
      capacityGb: ram.capacidadGb,
      memoryRamType: ram.tipoMemoriaRam,
      speedMHz: ram.velocidadMHz,
    }));
  }

  static mapperPerifericosDto(
    perifericos: PerifericoDto[]
  ): PeripheralDto[] {
    return perifericos.map((p) => ({
      name: p.nombre,
      type: p.tipo,
      brand: p.marca,
      model: p.modelo,
      serial: p.serial,
      code: p.codigo,
    }));
  }

  static mapperSoftwareDto(
    softwares: SoftwareInstaladoDto[]
  ): SoftwareInstalledDto[] {
    return softwares.map((s) => ({
      name: s.nombre,
    }));
  }

  static mapperConfiguracionRedDto(
    config: ConfiguracionRedDto
  ): NetworkConfigurationDto {
    return {
      type: config.tipo,
      macAddress: config.direccionMac,
      ipv4: config.ipv4,
    };
  }

  static mapperVideoCardsDto(videoCards: TarjetaVideoDto[]): VideoCardDto[] {
    return videoCards.map((v) => ({
      isIntegrated: v.esIntegrada,
      name: v.nombre,
    }));
  }
}
