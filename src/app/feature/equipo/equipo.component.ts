import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EquipoService } from '../../core/services/equipo/equipo.service';
import { Equipo } from '../../core/domain/entities/equipo.entity';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
  imports: [
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule
  ]
})
export class EquipoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'ip',
    'marca',
    'modelo',
    'procesador',
    'memoria',
    'tipoAlmacenamiento',
    'almacenamiento',
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
    const equipos: Equipo[] = [
    {
      ip: '192.168.1.1',
      marca: 'Dell',
      modelo: 'XPS 13',
      procesador: 'Intel Core i7',
      memoria: '16 GB',
      tipoAlmacenamiento: 'SSD',
      almacenamiento: '512 GB',
      sistemaOperativo: 'Windows 10',
    },
    {
      ip: '192.168.1.2',
      marca: 'HP',
      modelo: 'Spectre x360',
      procesador: 'Intel Core i5',
      memoria: '8 GB',
      tipoAlmacenamiento: 'SSD',
      almacenamiento: '256 GB',
      sistemaOperativo: 'Windows 10',
    },
    {
      ip: '192.168.1.3',
      marca: 'Apple',
      modelo: 'MacBook Air',
      procesador: 'M1',
      memoria: '8 GB',
      tipoAlmacenamiento: 'SSD',
      almacenamiento: '256 GB',
      sistemaOperativo: 'macOS Big Sur',
    },
    {
      ip: '192.168.1.4',
      marca: 'Lenovo',
      modelo: 'ThinkPad X1 Carbon',
      procesador: 'Intel Core i5',
      memoria: '16 GB',
      tipoAlmacenamiento: 'SSD',
      almacenamiento: '1 TB',
      sistemaOperativo: 'Windows 10',
    },
    {
      ip: '192.168.1.5',
      marca: 'Asus',
      modelo: 'ZenBook 14',
      procesador: 'Intel Core i7',
      memoria: '16 GB',
      tipoAlmacenamiento: 'SSD',
      almacenamiento: '512 GB',
      sistemaOperativo: 'Windows 10',
    },
  ];

    // const response = await this.equipoService.getAllEquipos();
    // response.forEach((equipo: Equipo) => {
    //   equipos.push(equipo);
    // });
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
