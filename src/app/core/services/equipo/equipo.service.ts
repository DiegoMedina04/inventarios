import { Injectable } from '@angular/core';
import * as EquipoUseCases from '../../useCases/equipo.useCase';
@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  constructor() {}
  async getAllEquipos() {
    return await EquipoUseCases.getAllEquipos();
  }
  async getEquipoById(id: number) {
    return await EquipoUseCases.getEquipoById(id);
  }
  async createEquipo(equipo: any) {
    return await EquipoUseCases.createEquipo(equipo);
  }
  async deleteEquipo(id: number) {
    return await EquipoUseCases.deleteEquipo(id);
  }
  async updateEquipo(equipo: any) {
    return await EquipoUseCases.updateEquipo(equipo);
  }
}
