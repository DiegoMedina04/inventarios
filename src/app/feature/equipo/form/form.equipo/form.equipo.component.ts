import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
interface Equipo {
  id: number;
  iconoPrincipal: string;
  nombre: string;
  iconoSecundario: string;
  badge: number;
  selection: boolean;
}

@Component({
  selector: 'app-form.equipo',
  standalone: false,
  templateUrl: './form.equipo.component.html',
  styleUrl: './form.equipo.component.css',
})
export class FormEquipoComponent {
  equipos: Equipo[] = [
    {
      id: 1,
      iconoPrincipal: 'laptop_windows',
      nombre: 'Portátil PC',
      iconoSecundario: 'check_circle',
      badge: 15,
      selection: false,
    },
    {
      id: 2,
      iconoPrincipal: 'developer_board',
      nombre: 'PC de escritorio',
      iconoSecundario: 'check_circle',
      badge: 8,
      selection: false,
    },
    {
      id: 3,
      iconoPrincipal: 'desktop_mac',
      nombre: 'All in One',
      iconoSecundario: 'check_circle',
      badge: 5,
      selection: false,
    },
    {
      id: 4,
      iconoPrincipal: 'phonelink',
      nombre: 'otros',
      iconoSecundario: 'check_circle',
      badge: 5,
      selection: false,
    },
  ];
  cardSeleccionada(equipoSeleccionado: Equipo): void {
    this.equipos = this.equipos.map((equipo) => ({
      ...equipo,
      selection: equipo.id === equipoSeleccionado.id,
    }));
  }
}
