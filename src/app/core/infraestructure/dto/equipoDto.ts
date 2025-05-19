export interface DiskDto {
  brand: string;
  model: string;
  diskTechnologyType: string;
  capacityGb: number;
  status: string;
  usageHours: number;
}

export interface RamModuleDto {
  capacityGb: number;
  memoryRamType: string;
  speedMHz: number;
}

export interface PeripheralDto {
  name: string;
  type: string;
  brand: string;
  model: string;
  serial: string;
  code: string;
}

export interface NetworkConfigurationDto {
  type: string;
  macAddress: string;
  ipv4: string;
}

export interface VideoCardDto {
  isIntegrated: boolean;
  name: string;
}

export interface SoftwareInstalledDto {
  name: string;
}

export class EquipoDTO {
  computerType: string;
  brandModel: string;
  processor: string;
  serialNumber: string;
  code: string;
  cpuSpeed: string;
  computerStatus: string;
  computerName: string;
  disks: DiskDto[];
  ramModules: RamModuleDto[];
  peripherals: PeripheralDto[];
  networkConfiguration: NetworkConfigurationDto;
  videoCards: VideoCardDto[];
  operatingSystem: string;
  operatingSystemLicense: string;
  antivirusInstalled: boolean;
  charger: boolean;
  ubication: string;
  antivirusName: string;
  detectedFaults: string;
  softwaresInstalled: SoftwareInstalledDto[];

  constructor(
    computerType: string,
    brandModel: string,
    processor: string,
    serialNumber: string,
    code: string,
    cpuSpeed: string,
    computerStatus: string,
    computerName: string,
    disks: DiskDto[],
    ramModules: RamModuleDto[],
    peripherals: PeripheralDto[],
    networkConfiguration: NetworkConfigurationDto,
    videoCards: VideoCardDto[],
    operatingSystem: string,
    operatingSystemLicense: string,
    antivirusInstalled: boolean,
    charger: boolean,
    ubication: string,
    antivirusName: string,
    detectedFaults: string,
    softwaresInstalled: SoftwareInstalledDto[]
  ) {
    this.computerType = computerType;
    this.brandModel = brandModel;
    this.processor = processor;
    this.serialNumber = serialNumber;
    this.code = code;
    this.cpuSpeed = cpuSpeed;
    this.computerStatus = computerStatus;
    this.computerName = computerName;
    this.disks = disks;
    this.ramModules = ramModules;
    this.peripherals = peripherals;
    this.networkConfiguration = networkConfiguration;
    this.videoCards = videoCards;
    this.operatingSystem = operatingSystem;
    this.operatingSystemLicense = operatingSystemLicense;
    this.antivirusInstalled = antivirusInstalled;
    this.charger = charger;
    this.ubication = ubication;
    this.antivirusName = antivirusName;
    this.detectedFaults = detectedFaults;
    this.softwaresInstalled = softwaresInstalled;
  }
}
