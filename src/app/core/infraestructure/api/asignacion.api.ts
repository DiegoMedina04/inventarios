import { Asignacion } from '../../domain/entities/asignacion.entity';
import { api } from '../http-client.config';

export class AsignacionApi {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'http://localhost:3000/asignaciones';
  }

  async getAsignaciones(): Promise<Asignacion[]> {
    try {
      const response = await api.get('/asignaciones/index');
      // console.log({ response });
      if (response.status != 200) {
      }
      response.data.asignaciones.map((e: any) => {
        // console.log({ e });
      });
      // console.log('Datos: ', response.data);
    } catch (error) {
      // console.log({ error });
    }
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
          id: 122,
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
  async createAsignacion(asignacion: Asignacion): Promise<Asignacion | null> {
    const response = await api.post('/asignacion', asignacion);
    if (response.status != 200) {
    }
    return null;
  }
}
