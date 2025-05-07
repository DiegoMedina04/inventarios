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

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, UsuarioModule, SidebarComponent, SearchbarComponent ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
