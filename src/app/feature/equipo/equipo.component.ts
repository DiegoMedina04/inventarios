import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoModule } from './equipo.module';
import { Equipo } from '../../core/domain/entities/equipo.entity';
import { EquipoService } from '../../core/services/equipo/equipo.service';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-equipo',
  imports: [EquipoModule, CommonModule, MatTableModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})


export class EquipoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  
  equipos: Equipo[] = [];
  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.getAllEquipos();
  }

  async getAllEquipos() {
    const equipos: Equipo[] = await this.equipoService.getAllEquipos();
    this.equipos = equipos;
  }

  async createEquipo(equipo: Equipo) {
    // Implementar la lógica para crear un nuevo usuario
  }

  async editEquipo(equipo: Equipo) {
    // Implementar la lógica para editar un usuario
  }

  async deleteEquipo(id: number) {
    // Implementar la lógica para eliminar un usuario
  }
}
