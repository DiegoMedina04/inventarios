import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './feature/usuarios/usuario.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomeComponent } from './feature/home/home/home.component';
import { SearchbarComponent } from './shared/components/searchbar/searchbar.component';
import { LoginComponent } from './feature/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { MatIconModule } from '@angular/material/icon';
import { FormEquipoComponent } from './feature/equipo/form/form.equipo/form.equipo.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, HomeComponent, FormEquipoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    SidebarComponent,
    SearchbarComponent,
    LoginComponent,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [provideClientHydration(withEventReplay()), CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
