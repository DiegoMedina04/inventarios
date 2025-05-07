import { Component, OnInit } from '@angular/core';
import { DepartamentoModule } from './departamento.module';
import { CommonModule } from '@angular/common';
import { Departamento } from '../../core/domain/entities/departamento.entity';
import { DepartamentoService } from '../../core/services/departamento/departamento.service';

@Component({
  selector: 'app-departamentos',
  imports: [DepartamentoModule, CommonModule],
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css',
})
export class DepartamentosComponent implements OnInit {
  departamentos: Departamento[] = [];

  constructor(private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.getAllDepartamentos();
  }

  async getAllDepartamentos() {
    const departamentos: Departamento[] =
      await this.departamentoService.getAllDepartamentos();
    this.departamentos = departamentos;
  }
  async createDepartamento(departamento: any) {
    // Implementar la lógica para crear un nuevo departamento
  }
  async editDepartamento(departamento: any) {
    // Implementar la lógica para editar un departamento
  }
  async deleteDepartamento(id: number) {
    // Implementar la lógica para eliminar un departamento
  }
}
