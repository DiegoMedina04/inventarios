import { Component, OnInit } from '@angular/core';
import { Asignacion } from '../../core/domain/entities/asignacion.entity';
import { AsignacionService } from '../../core/services/asignacion/asignacion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignacion',
  imports: [CommonModule],
  templateUrl: './asignacion.component.html',
  styleUrl: './asignacion.component.css',
})
export class AsignacionComponent implements OnInit {
  asignaciones: Asignacion[] = [];

  constructor(private asignacionService: AsignacionService) {}

  ngOnInit(): void {
    this.loadAsignaciones();
  }

  async loadAsignaciones(): Promise<void> {
    this.asignaciones = await this.asignacionService.getAsignaciones();
    console.log(this.asignaciones);
  }
}
