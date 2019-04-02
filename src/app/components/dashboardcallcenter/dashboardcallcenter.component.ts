import { Component, OnInit, ViewChild } from '@angular/core';
import { faHeadset, faCar } from '@fortawesome/free-solid-svg-icons';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

import { AngularFirestore } from 'angularfire2/firestore';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-dashboardcallcenter',
  templateUrl: './dashboardcallcenter.component.html',
  styleUrls: ['./dashboardcallcenter.component.css']
})
export class DashboardcallcenterComponent implements OnInit {

  @ViewChild(MatSort, {}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Origen DATA tabla
  dataSource = new MatTableDataSource();
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['Folio Encuesta', 'Fecha Entrada', 'Fecha Salida', 'Servicio', 'Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5', 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Pregunta 9', 'Pregunta 10'];
  displayedColumns2 = ['Folio Encuesta', 'Nombre Cliente', 'Numero Cliente', 'Correo Cliente', 'Comentario Taller', 'Comentario Llamada'];

  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'callexport',
  };

 // Iconos
  faHeadset = faHeadset;
  faCar = faCar;

  constructor(
    private afs: AngularFirestore,
    private exportAsService: ExportAsService,
    private _dataService: DatatableService,
  ) { }

  ngOnInit() {
    return this._dataService.getDocs().subscribe(res => this.dataSource.data = res );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  exportAs(type) {
    this.config.type = type;
    this.exportAsService.save(this.config, 'FileCallCenter' );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
