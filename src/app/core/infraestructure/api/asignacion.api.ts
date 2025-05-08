import { AsignacionMapper } from '../../application/mapper/asignacion.mapper';
import { Asignacion } from '../../domain/entities/asignacion.entity';
import { AsignacionDTO } from '../dto/asignacionDto';
import { api } from '../http-client.config';

export class AsignacionApi {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'http://localhost:3000/asignaciones';
  }

  async getAsignaciones(): Promise<Asignacion[]> {
    try {
      const {
        status,
        data: { asignaciones },
      } = await api.get('/asignaciones/index');
      if (status != 200) {
      }
      return asignaciones.map((asignacionDTO: AsignacionDTO) =>
        AsignacionMapper.toDomain(asignacionDTO)
      );
    } catch (error) {
      console.log({ error });
      return [];
    }
    // return [
    //   {
    //     id: 1,
    //     usuario: {
    //       id: 1,
    //       nombre: 'Juan Perez',
    //       apellido: '',
    //       email: 'Calle Falsa 123',
    //       password: 'Calle Falsa 123',
    //       estado: true,
    //     },
    //     equipo: {
    //       id: 122,
    //       nombre: 'string',
    //       marca: 'string',
    //       modelo: 'string',
    //       procesador: 'string',
    //       memoria: 'string',
    //       tipoAlmacenamiento: 'string',
    //       almacenamiento: 'string',
    //       sistemaOperativo: 'string',
    //       serial: 'string',
    //       serialEmpresa: 'string',
    //       bateria: 'string',
    //       mac: 'string',
    //       ipv4: 'string',
    //       nombreLogico: 'string',
    //       tipoConexion: 'string',
    //     },
    //     fechaAsignacion: new Date('2023-01-01'),
    //     fechaDevolucion: new Date('2023-01-15'),
    //     fechaCreacion: new Date('2023-01-01'),
    //     fechaModificacion: null,
    //     estado: true,
    //   },
    // ];
  }
  async createAsignacion(asignacion: Asignacion): Promise<Asignacion | null> {
    const response = await api.post('/asignacion', asignacion);
    if (response.status != 200) {
    }
    return null;
  }
}
