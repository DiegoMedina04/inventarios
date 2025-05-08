import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './feature/usuarios/usuarios.component';
import { EquipoComponent } from './feature/equipo/equipo.component';
import { DepartamentosComponent } from './feature/departamentos/departamentos.component';
import { HomeComponent } from './feature/home/home/home.component';
import { AsignacionComponent } from './feature/asignacion/asignacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  {
    path: 'equipos',
    component: EquipoComponent,
  },
  {
    path: 'departamento',
    component: DepartamentosComponent,
  },
  {
    path: 'asignacion',
    component: AsignacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


