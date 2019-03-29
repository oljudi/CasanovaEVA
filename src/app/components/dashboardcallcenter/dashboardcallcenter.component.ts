import { Component, OnInit, ViewChild } from '@angular/core';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { AngularFirestore } from 'angularfire2/firestore';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-dashboardcallcenter',
  templateUrl: './dashboardcallcenter.component.html',
  styleUrls: ['./dashboardcallcenter.component.css']
})
export class DashboardcallcenterComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Origen DATA tabla
  dataSource = new MatTableDataSource();
  displayedColumns = ['Folio Encuesta', 'Fecha Entrada', 'Fecha Salida', 'Servicio', 'Cliente', 'Telefono Cliente', 'Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5', 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Comentarios Taller'];

  rows: any[] = [];
  // Iconos
  faHeadset = faHeadset;

  constructor(
    private afs: AngularFirestore,
    private _dataService: DatatableService
  ) { }

  ngOnInit() {
    return this._dataService.getDocs().subscribe(res => this.dataSource.data = res );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
