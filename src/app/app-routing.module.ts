import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './feature/usuarios/usuarios.component';
import { EquipoComponent } from './feature/equipo/equipo.component';
import { DepartamentosComponent } from './feature/departamentos/departamentos.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  {
    path: 'equipos',
    component: EquipoComponent,
  },
  {
    path: 'departamento',
    component: DepartamentosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
