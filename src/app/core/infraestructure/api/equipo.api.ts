import { EquipoMapper } from '../../application/mapper/equipo.mapper';
import { Equipo } from '../../domain/entities/equipo.entity';
import { EquipoDTO } from '../dto/equipoDto';
import { api } from '../http-client.config';

export class EquipoApi {
  constructor() {}
  async findAll(): Promise<Equipo[]> {
    try {
      const {
        status,
        data: { equipos },
      } = await api.get('/equipos/index');
      if (status != 200) {
      }
      return equipos.map((equipoDTO: EquipoDTO) =>
        EquipoMapper.toDomain(equipoDTO)
      );
    } catch (error) {
      console.log({ error });
      return [];
    }

  }

  async findById(id: number): Promise<Equipo> {
    const response = await fetch(`http://localhost:3000/equipo/${id}`);
    return response.json();
  }

  async create(equipo: Equipo): Promise<Equipo> {
    const response = await fetch('http://localhost:3000/equipo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(equipo),
    });
    return response.json();
  }

  async update(equipo: Equipo): Promise<Equipo> {
    const response = await fetch(`http://localhost:3000/equipo/${equipo.antivirusInstalado}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(equipo),
    });
    return response.json();
  }

  async delete(id: number): Promise<void> {
    await fetch(`http://localhost:3000/equipo/${id}`, {
      method: 'DELETE',
    });
  }
}
