import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../core/services/usuario/usuario.service';
import { Usuario } from '../../core/domain/entities/usuario.entity';
import { UsuarioModule } from './usuario.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UsuarioModule, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  async getAllUsuarios() {
    this.usuarios = await this.usuarioService.getAllUsuarios();
  }

  async createUsuario(usuario: Usuario) {
    await this.usuarioService.createUsuario(usuario);
    this.getAllUsuarios();
  }

  async editUsuario(usuario: Usuario) {}

  async deleteUsuario(id: number) {
    await this.usuarioService.deleteUsuario(id);
    this.getAllUsuarios();
  }
}
