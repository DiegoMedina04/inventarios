import { signal } from '@angular/core';
interface Usuario {
  nombre: string;
  correo: string;
  token: string;
  sidebar: boolean;
}
export class AuthSignal {
  usuarioSignal = signal<Usuario | null>(null);

  login(email: string, password: string) {
    this.usuarioSignal.set({
      nombre: 'prueba',
      correo: 'prueba@gamil.com',
      token: 'dsdjfdsbhufew hfdwsdgsah dgsyuagdusa duasid',
      sidebar: true,
    });
  }
  logout() {
    this.usuarioSignal.set(null);
  }
}
