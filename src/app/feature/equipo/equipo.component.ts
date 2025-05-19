import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EquipoService } from '../../core/services/equipo/equipo.service';
import { Equipo } from '../../core/domain/entities/equipo.entity';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import * as EquipoUseCase from '../../core/useCases/equipo.useCase';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
})
export class EquipoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "codigo",
    'nombreComputador',
    'marcaModelo',
    'procesador',
    'totalRam',
    'totalDiscos',
    'sistemaOperativo',
  ];

  equipos: Equipo[] = [];
  dataSource = new MatTableDataSource<Equipo>(this.equipos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.getAllEquipos();
  }

  async getAllEquipos() {
    const equipos: Equipo[] = [];
    const equiposResponse = await EquipoUseCase.getAllEquipos();
    equiposResponse.forEach((equipo) => {
      equipos.push(equipo);
    });
    this.equipos = equipos;
    this.dataSource.data = this.equipos;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
