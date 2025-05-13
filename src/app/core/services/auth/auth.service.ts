import { Injectable, signal, Signal } from '@angular/core';
import { AuthSignal, Usuario } from '../../state/auth.signal';
import * as AutenticacionCasoUso from '../../useCases/auth.useCase';
import { LoginResponseDto } from '../../infraestructure/dto/loginDto';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: Signal<Usuario | null> = signal(null) 
  isLogged = false
  constructor(private authSignal:AuthSignal, private router:Router, private cookieService: CookieService) {
    this.usuario = this.authSignal.getUsuario();
   }
  
  async login(correo:string, clave:string){
    const respuesta:LoginResponseDto | null =await  AutenticacionCasoUso.login(correo, clave);

    const usuarioLogueado: Usuario = {
      token: respuesta?.data.token|| '',
      sidebar: true
    };

    if(respuesta?.code==200){
      this.cookieService.set('token', respuesta?.data.token);
      this.authSignal.login(usuarioLogueado);
      this.router.navigate(['/']);

    }else if(respuesta?.code==400){
      console.log(respuesta.data)
    }
  }
  logout(){
    this.cookieService.delete('token')
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    this.isLogged = this.cookieService.check('token');
    return this.isLogged;
  }
}
