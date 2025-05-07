import { Injectable } from '@angular/core';
import * as TaskUseCases from '../../useCases/usuario.usecases';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}
  async getAllUsuarios() {
    return await TaskUseCases.getAllUsuarios();
  }
  async createUsuario(usuario: any) {
    return await TaskUseCases.createUsuario(usuario);
  }
  async deleteUsuario(id: number) {
    return await TaskUseCases.deleteUsuario(id);
  }
}
