import { Injectable } from '@angular/core';
import * as AsignacionUseCase from '../../useCases/asignacion.useCase';
import { Asignacion } from '../../domain/entities/asignacion.entity';
@Injectable({
  providedIn: 'root',
})
export class AsignacionService {
  constructor() {}

  getAsignaciones(): Promise<Asignacion[]> {
    return AsignacionUseCase.asignar();
  }
}
