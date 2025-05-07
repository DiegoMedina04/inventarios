import { Departamento } from '../../domain/entities/departamento.entity';

export class DepartamentoApi {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'http://localhost:3000/departamentos';
  }

  async getDepartamentos(): Promise<Departamento[]> {
    return [
      new Departamento(
        1,
        'Recursos Humanos',
        'Departamento encargado de la gestión de personal',
        new Date('2010-05-01'),
        new Date('2023-05-01'),
        true
      ),
      new Departamento(
        2,
        'Tecnologías de la Información',
        'Departamento encargado de la infraestructura tecnológica',
        new Date('2015-03-10'),
        new Date('2023-05-01'),
        true
      ),
      new Departamento(
        3,
        'Finanzas',
        'Departamento encargado de la gestión financiera y contable',
        new Date('2008-07-15'),
        new Date('2023-04-25'),
        true
      ),
      new Departamento(
        4,
        'Marketing',
        'Departamento encargado de la promoción y ventas',
        new Date('2012-08-01'),
        new Date('2023-04-30'),
        true
      ),
      new Departamento(
        5,
        'Operaciones',
        'Departamento encargado de la gestión de la producción y operaciones',
        new Date('2010-11-20'),
        new Date('2023-05-01'),
        false
      ),
      new Departamento(
        6,
        'Logística',
        'Departamento encargado de la distribución y transporte de productos',
        new Date('2014-09-10'),
        new Date('2023-04-27'),
        true
      ),
      new Departamento(
        7,
        'Investigación y Desarrollo',
        'Departamento encargado de la innovación y desarrollo de nuevos productos',
        new Date('2018-02-12'),
        new Date('2023-05-01'),
        true
      ),
      new Departamento(
        8,
        'Atención al Cliente',
        'Departamento encargado de la gestión de relaciones con los clientes',
        new Date('2016-06-25'),
        new Date('2023-05-01'),
        true
      ),
      new Departamento(
        9,
        'Legal',
        'Departamento encargado de la gestión legal y compliance',
        new Date('2010-04-10'),
        new Date('2023-04-29'),
        true
      ),
      new Departamento(
        10,
        'Seguridad',
        'Departamento encargado de la seguridad física y de información',
        new Date('2012-03-05'),
        new Date('2023-05-01'),
        true
      ),
    ];
  }

  async getDepartamentoById(id: number): Promise<any> {
    const response = await fetch(`${this.apiUrl}/${id}`);
    return response.json();
  }

  async createDepartamento(departamento: any): Promise<any> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(departamento),
    });
    return response.json();
  }
}
