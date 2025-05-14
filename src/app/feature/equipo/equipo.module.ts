import { NgModule } from '@angular/core';
import { EquipoService } from '../../core/services/equipo/equipo.service';
import { FormEquipoComponent } from './form/form.equipo/form.equipo.component';

@NgModule({
  providers: [EquipoService],
  declarations: [],
})
export class EquipoModule {}
