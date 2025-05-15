import { Component } from '@angular/core';
import { EquipoFormulario } from './interface.formulario.equipo';
import * as EquipoUseCase from '../../../../core/useCases/equipo.useCase';
import { Equipo } from '../../../../core/domain/entities/equipo.entity';
import { trigger, transition, style, animate } from '@angular/animations';

interface EquipoDos {
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
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), 
        animate('500ms 0s ease-in-out', style({ opacity: 1 })) // Animación de desvanecimiento
      ]),
      transition(':leave', [
        animate('500ms 0s ease-in-out', style({ opacity: 0 })) // Animación al desaparecer
      ])
    ])
  ]
})
export class FormEquipoComponent {
  currentStep: number = 0;
  equipos: EquipoDos[] = [
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

  formulario: EquipoFormulario = new EquipoFormulario();

  crearEquipo(event: Event): void {
    event.preventDefault();
    console.log(this.formulario);
    // EquipoUseCase.createEquipo(equipo);
  }

  cardSeleccionada(equipoSeleccionado: EquipoDos): void {
    this.equipos = this.equipos.map((equipo) => ({
      ...equipo,
      selection: equipo.id === equipoSeleccionado.id,
    }));
  }
  navigateNext(): void {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }
  navigateBack(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
