import { Injectable, Signal, signal } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
export interface Usuario {
  token: string;
  sidebar: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthSignal {
  private _usuarioSignal = signal<Usuario | null>(null);

  constructor(private router:Router){

  }

  readonly usuarioSignal = this._usuarioSignal.asReadonly();
  getUsuario(): Signal<Usuario | null> {
    return this.usuarioSignal
  }
 async login(usuario:Usuario) {
  this._usuarioSignal.set(usuario);

}

  logout() {
    this._usuarioSignal.set(null);
    this.router.navigate(['/login']);
  }
}

