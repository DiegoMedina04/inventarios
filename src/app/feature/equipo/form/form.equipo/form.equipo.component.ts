import { Component } from '@angular/core';
import { EquipoFormulario, TipoComputador } from './interface.formulario.equipo';
import * as EquipoUseCase from '../../../../core/useCases/equipo.useCase';
import { DiscoDto, Equipo } from '../../../../core/domain/entities/equipo.entity';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

interface EquipoDos {
  id: number;
  iconoPrincipal: string;
  nombre: string;
  iconoSecundario: string;
  tipo: TipoComputador;
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
        animate('500ms 0s ease-in-out', style({ opacity: 1 })), // Animación de desvanecimiento
      ]),
      transition(':leave', [
        animate('500ms 0s ease-in-out', style({ opacity: 0 })), // Animación al desaparecer
      ]),
    ]),
  ],
})
export class FormEquipoComponent {

  constructor(private router: Router) {

  }
  
  currentStep: number = 0;
  equipos: EquipoDos[] = [
    {
      id: 1,
      iconoPrincipal: 'laptop_windows',
      tipo: TipoComputador.LAPTOP,
      nombre: 'Portátil PC',
      iconoSecundario: 'check_circle',
      badge: 15,
      selection: false,
    },
    {
      id: 2,
      iconoPrincipal: 'developer_board',
      tipo: TipoComputador.PC,
      nombre: 'PC de escritorio',
      iconoSecundario: 'check_circle',
      badge: 8,
      selection: false,
    },
    {
      id: 3,
      iconoPrincipal: 'desktop_mac',
      tipo: TipoComputador.ALLINONE,
      nombre: 'All in One',
      iconoSecundario: 'check_circle',
      badge: 5,
      selection: false,
    },
    {
      id: 4,
      tipo: TipoComputador.OTHERS,
      iconoPrincipal: 'phonelink',
      nombre: 'otros',
      iconoSecundario: 'check_circle',
      badge: 5,
      selection: false,
    },
  ];

  formulario: EquipoFormulario = new EquipoFormulario();
  discos : DiscoDto[] = [{
      tipoTecnologiaDisco: '',
      capacidadGb: 0,
      marca: '',
      estado: '',
      modelo: '',
      horasUso: 0,
    }];
  crearEquipo(event: Event): void {
    event.preventDefault();
    console.log(this.formulario);
    EquipoUseCase.createEquipo(this.formulario)
     .then(() => {
        this.router.navigate(['/equipos']);
      })
      .catch(error => {
        console.error('Error al crear el equipo', error);
      });

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
  agregarDisco():void{
    console.log(this.discos);
    this.formulario.discos.push({
tipoTecnologiaDisco: '',      capacidadGb: 0,
      marca: '',
      estado: '',
      modelo: '',
      horasUso: 0
    });
    console.log(this.formulario.discos)
  }
  agregarRam():void{
    console.log('agregando ram')
    this.formulario.modulosRam.push(
      {
        capacidadGb: 0,
        tipoMemoriaRam: '',
        velocidadMHz: 0
      }
    );
  }
  eliminarDisco(i: number) {
    this.formulario.discos.splice(i, 1);
  }
  eliminarRam(i: number) {
    this.formulario.modulosRam.splice(i, 1);
  }
}
