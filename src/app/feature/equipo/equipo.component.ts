import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoModule } from './equipo.module';
import { Equipo } from '../../core/domain/entities/equipo.entity';
import { EquipoService } from '../../core/services/equipo/equipo.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-equipo',
  imports: [EquipoModule, CommonModule, MatTableModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
})

export class EquipoComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'marca',
    'modelo',
    'procesador',
    'memoria',
    'tipoAlmacenamiento',
    'almacenamiento',
    'sistemaOperativo',
    
  ];
  // 'serial',
  //   'serialEmpresa',
  //   'bateria',
  //   'mac',
  //   'ipv4',
  //   'nombreLogico',
  //   'tipoConexion'
  
  equipos: Equipo[] = [];
  dataSource = this.equipos; 
  
  clickedRows = new Set<Equipo>();
  
  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.getAllEquipos();
  }

  async getAllEquipos() {
    const equipos: Equipo[] = await this.equipoService.getAllEquipos();
    this.equipos = equipos;

    // Aquí se podría definir los datos directamente si no hay servicio
    // this.equipos = [...ELEMENT_DATA]; // Elementos de ejemplo para prueba
    this.dataSource = this.equipos;
  }

  async createEquipo(equipo: Equipo) {
    // Implementar la lógica para crear un nuevo equipo
  }

  async editEquipo(equipo: Equipo) {
    // Implementar la lógica para editar un equipo
  }

  async deleteEquipo(id: number) {
    // Implementar la lógica para eliminar un equipo
  }
}
