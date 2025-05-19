import e from 'express';
import { EquipoMapper } from '../../application/mapper/equipo.mapper';
import { Equipo } from '../../domain/entities/equipo.entity';
import { EquipoDTO } from '../dto/equipoDto';
import { api } from '../http-client.config';

export class EquipoApi {
  constructor() { }
  async findAll(): Promise<Equipo[]> {
    try {
      const pageNumber = 1;
      const pageSize = 40;
      const {  status,  data: { data } } = await api.get(
        `Computer/list?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );

      const equipos=  data.data.map((equipoDTO: EquipoDTO) =>EquipoMapper.toDomain(equipoDTO));
      console.log({equipos})
      return equipos;
      
    } catch (error) {
      console.log({ error });
      return [];
    }
  }

  async findById(id: number): Promise<Equipo> {
    const response = await fetch(`http://localhost:3000/equipo/${id}`);
    return response.json();
  }

  async create(equipo: Equipo): Promise<any> {

    const equipoBackend: EquipoDTO= EquipoMapper.toDTO(equipo);
    console.log(equipoBackend);
    
    const response = await api.post('/Computer', equipoBackend);
    return EquipoMapper.toDomain(response.data.data);
  }

  async update(equipo: Equipo): Promise<Equipo> {
    const equipoBackend: EquipoDTO= EquipoMapper.toDTO(equipo);
    console.log(equipoBackend);
    
    const response = await api.put('/Computer', equipoBackend);
    return EquipoMapper.toDomain(response.data);
  }

  async delete(id: number): Promise<void> {
     await api.post(`/Computer/${id}`);
  }
}
