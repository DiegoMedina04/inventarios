import { Injectable } from '@angular/core';
import * as DepartamentoUseCase from '../../useCases/departamento.useCase';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  constructor() {}
  async getAllDepartamentos() {
    return await DepartamentoUseCase.getAllDepartamentos();
  }
  async getDepartamentoById(id: number) {
    return await DepartamentoUseCase.getDepartamentoById(id);
  }
  async createDepartamento(departamento: any) {
    return await DepartamentoUseCase.createDepartamento(departamento);
  }
  async updateDepartamento(departamento: any) {
    return await DepartamentoUseCase.updateDepartamento(departamento);
  }
  async deleteDepartamento(id: number) {
    return await DepartamentoUseCase.deleteDepartamento(id);
  }
}
