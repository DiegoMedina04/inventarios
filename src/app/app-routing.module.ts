import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './feature/usuarios/usuarios.component';
import { EquipoComponent } from './feature/equipo/equipo.component';
import { DepartamentosComponent } from './feature/departamentos/departamentos.component';
import { HomeComponent } from './feature/home/home/home.component';
import { AsignacionComponent } from './feature/asignacion/asignacion.component';
import { MantenimientoComponent } from './feature/mantenimiento/mantenimiento.component';
import { HistorialComponent } from './feature/historial/historial.component';
import { LoginComponent } from './feature/login/login.component';
import { LoginRedirectGuard } from './core/infraestructure/guards/loginRedirect.guard';
import { AuthGuard } from './core/infraestructure/guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard ]
   },
  { path: 'login',
    component: LoginComponent,
    canActivate: [LoginRedirectGuard]
  },

  { path: 'usuarios', component: UsuariosComponent,
    canActivate: [AuthGuard ]
   },
  {
    path: 'equipos',
    component: EquipoComponent,
    canActivate: [AuthGuard ]
  },
  {
    path: 'departamento',
    component: DepartamentosComponent,
    canActivate: [AuthGuard ]
  },
  {
    path: 'asignacion',
    component: AsignacionComponent,
    canActivate: [AuthGuard ]
  },
  {
    path: 'mantenimiento',
    component: MantenimientoComponent,
    canActivate: [AuthGuard ]
  },
  {
    path: 'historial',
    component: HistorialComponent,
    canActivate: [AuthGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
