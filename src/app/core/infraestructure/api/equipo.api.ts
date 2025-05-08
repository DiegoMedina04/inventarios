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
    // return [
    //   new Equipo(
    //     1,
    //     'Laptop HP',
    //     'HP',
    //     'EliteBook 840 G6',
    //     'Intel Core i7',
    //     '16GB',
    //     'SSD',
    //     '512GB',
    //     'Windows 10',
    //     '1234567890',
    //     'HP12345',
    //     '10h',
    //     '00:14:22:9A:8C:7D',
    //     '192.168.1.10',
    //     'Equipo1',
    //     'Wi-Fi'
    //   ),
    //   new Equipo(
    //     2,
    //     'Laptop Dell',
    //     'Dell',
    //     'Latitude 7400',
    //     'Intel Core i5',
    //     '8GB',
    //     'SSD',
    //     '256GB',
    //     'Windows 10',
    //     '2345678901',
    //     'DELL54321',
    //     '8h',
    //     '00:14:22:9A:8C:7E',
    //     '192.168.1.11',
    //     'Equipo2',
    //     'Ethernet'
    //   ),
    //   new Equipo(
    //     3,
    //     'PC de Escritorio',
    //     'Lenovo',
    //     'ThinkCentre M720',
    //     'Intel Core i5',
    //     '16GB',
    //     'HDD',
    //     '1TB',
    //     'Windows 10',
    //     '3456789012',
    //     'LENOVO2345',
    //     '12h',
    //     '00:14:22:9A:8C:7F',
    //     '192.168.1.12',
    //     'Equipo3',
    //     'Ethernet'
    //   ),
    //   new Equipo(
    //     4,
    //     'Laptop ASUS',
    //     'ASUS',
    //     'ZenBook 14',
    //     'AMD Ryzen 7',
    //     '8GB',
    //     'SSD',
    //     '512GB',
    //     'Windows 10',
    //     '4567890123',
    //     'ASUS67890',
    //     '9h',
    //     '00:14:22:9A:8C:80',
    //     '192.168.1.13',
    //     'Equipo4',
    //     'Wi-Fi'
    //   ),
    //   new Equipo(
    //     5,
    //     'Servidor Dell',
    //     'Dell',
    //     'PowerEdge R740',
    //     'Intel Xeon Silver',
    //     '32GB',
    //     'SSD',
    //     '2TB',
    //     'Ubuntu 20.04',
    //     '5678901234',
    //     'DELL09876',
    //     '24h',
    //     '00:14:22:9A:8C:81',
    //     '192.168.1.14',
    //     'Equipo5',
    //     'Ethernet'
    //   ),
    //   new Equipo(
    //     6,
    //     'Laptop Acer',
    //     'Acer',
    //     'Predator Helios 300',
    //     'Intel Core i7',
    //     '16GB',
    //     'SSD',
    //     '1TB',
    //     'Windows 10',
    //     '6789012345',
    //     'ACER12345',
    //     '8h',
    //     '00:14:22:9A:8C:82',
    //     '192.168.1.15',
    //     'Equipo6',
    //     'Wi-Fi'
    //   ),
    //   new Equipo(
    //     7,
    //     'PC de Escritorio',
    //     'HP',
    //     'Pavilion',
    //     'Intel Core i3',
    //     '4GB',
    //     'HDD',
    //     '500GB',
    //     'Windows 7',
    //     '7890123456',
    //     'HP98765',
    //     '10h',
    //     '00:14:22:9A:8C:83',
    //     '192.168.1.16',
    //     'Equipo7',
    //     'Ethernet'
    //   ),
    //   new Equipo(
    //     8,
    //     'Tablet Samsung',
    //     'Samsung',
    //     'Galaxy Tab S6',
    //     'Snapdragon 855',
    //     '6GB',
    //     'SSD',
    //     '128GB',
    //     'Android 10',
    //     '8901234567',
    //     'SAMSUNG54321',
    //     '10h',
    //     '00:14:22:9A:8C:84',
    //     '192.168.1.17',
    //     'Equipo8',
    //     'Wi-Fi'
    //   ),
    //   new Equipo(
    //     9,
    //     'Laptop Lenovo',
    //     'Lenovo',
    //     'ThinkPad X1',
    //     'Intel Core i7',
    //     '16GB',
    //     'SSD',
    //     '512GB',
    //     'Windows 10',
    //     '9012345678',
    //     'LENOVO09876',
    //     '12h',
    //     '00:14:22:9A:8C:85',
    //     '192.168.1.18',
    //     'Equipo9',
    //     'Ethernet'
    //   ),
    //   new Equipo(
    //     10,
    //     'Servidor HP',
    //     'HP',
    //     'ProLiant DL380 Gen10',
    //     'Intel Xeon Gold',
    //     '64GB',
    //     'SSD',
    //     '4TB',
    //     'Windows Server 2019',
    //     '0123456789',
    //     'HP54321',
    //     '48h',
    //     '00:14:22:9A:8C:86',
    //     '192.168.1.19',
    //     'Equipo10',
    //     'Ethernet'
    //   ),
    // ];
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
    const response = await fetch(`http://localhost:3000/equipo/${equipo.id}`, {
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
