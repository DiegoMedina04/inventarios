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
  }
  async createAsignacion(asignacion: Asignacion): Promise<Asignacion | null> {
    const response = await api.post('/asignacion', asignacion);
    if (response.status != 200) {
    }
    return null;
  }
}
