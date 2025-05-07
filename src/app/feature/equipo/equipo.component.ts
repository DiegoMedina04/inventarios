import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoModule } from './equipo.module';
import { Equipo } from '../../core/domain/entities/equipo.entity';
import { EquipoService } from '../../core/services/equipo/equipo.service';

@Component({
  selector: 'app-equipo',
  imports: [EquipoModule, CommonModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})
export class EquipoComponent implements OnInit {
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
