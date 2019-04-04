import { Component, OnInit, ViewChild } from '@angular/core';
import { faHeadset, faCar } from '@fortawesome/free-solid-svg-icons';

import { MatTableDataSource, MatSort, MatPaginator, MatRadioButton } from '@angular/material';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

import { AngularFirestore } from 'angularfire2/firestore';
import { DatatableService } from 'src/app/services/datatable.service';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { RegistroCompletoInterface } from 'src/app/Models/Registrocompleto';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboardcallcenter',
  templateUrl: './dashboardcallcenter.component.html',
  styleUrls: ['./dashboardcallcenter.component.css']
})
export class DashboardcallcenterComponent implements OnInit {

  @ViewChild(MatSort, { read: true }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Origen DATA tabla
  dataSource = new MatTableDataSource();
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['Folio Encuesta', 'Fecha Entrada', 'Fecha Salida', 'Servicio', 'Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5', 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Pregunta 9', 'Pregunta 10', 'Total'];
  // tslint:disable-next-line:max-line-length
  displayedColumns2 = ['Folio Encuesta','Llamada', 'Fecha de seguimiento', 'Comentario Taller', 'Comentario Llamada', 'Enviar comentarios'];
  comentarioscall: string;
  id: string;
  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'callexport',
  };

 // Iconos
  faHeadset = faHeadset;
  faCar = faCar;
  mod: any = {};
  constructor(
    private afs: AngularFirestore,
    private exportAsService: ExportAsService,
    private _dataService: DatatableService,
    public encuestase: EncuestaService
  ) {
    this.dataSource.sort = this.sort;
    const today = new Date();
    this.mod.fecha = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
  }

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
  coments({value}: {value: RegistroCompletoInterface}) {
    value.comentarioscall = this.comentarioscall;
    value.id = this.id;
    value.validacion = 'Ok';
    value.fechac = formatDate(new Date(), 'dd/MM/yyyy hh:mm:ss a', 'en');
      console.log (value, this.id);
    this.encuestase.updateType(value);
  }
  getval(id) {
    this.id = id.id;
  }
  myFunction2(filterValue: string) {
    this.comentarioscall = filterValue;
  }
  myFunction() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('inputfe');
    filter = input.value;
    table = document.getElementById('mytable5');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[5];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) < -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
}
