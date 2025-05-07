import { Asignacion } from '../../domain/entities/asignacion.entity';

export class AsignacionApi {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'http://localhost:3000/asignaciones';
  }

  async getAsignaciones(): Promise<Asignacion[]> {
    return [
      {
        id: 1,
        usuario: {
          id: 1,
          nombre: 'Juan Perez',
          apellido: '',
          email: 'Calle Falsa 123',
          password: 'Calle Falsa 123',
          estado: true,
        },
        equipo: {
          id: 1,
          nombre: 'string',
          marca: 'string',
          modelo: 'string',
          procesador: 'string',
          memoria: 'string',
          tipoAlmacenamiento: 'string',
          almacenamiento: 'string',
          sistemaOperativo: 'string',
          serial: 'string',
          serialEmpresa: 'string',
          bateria: 'string',
          mac: 'string',
          ipv4: 'string',
          nombreLogico: 'string',
          tipoConexion: 'string',
        },
        fechaAsignacion: new Date('2023-01-01'),
        fechaDevolucion: new Date('2023-01-15'),
        fechaCreacion: new Date('2023-01-01'),
        fechaModificacion: null,
        estado: true,
      },
    ];
  }
}
