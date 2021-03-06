import { Component, OnInit, ViewChild } from '@angular/core';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

import { faCarCrash, faSearch, faStickyNote, faPrint, faCar } from '@fortawesome/free-solid-svg-icons';


import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


import { AngularFirestore} from 'angularfire2/firestore';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { DatatableService } from 'src/app/services/datatable.service';
import { LevelaccessService } from 'src/app/services/levelaccess.service';
import { AuthService } from 'src/app/services/auth.service';
import { RegistroInterface } from 'src/app/Models/registro';


@Component({
  selector: 'app-dashboardtaller',
  templateUrl: './dashboardtaller.component.html',
  styleUrls: ['./dashboardtaller.component.css'],
})
export class DashboardtallerComponent implements OnInit {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Iconos

  faCarCrash = faCarCrash;
  faSearch = faSearch;
  faStickyNote = faStickyNote;
  faPrint = faPrint;
  faCar = faCar;

  fechaent: string;
  fechasal: string;
  listado: any;

  list = [];
  list2 = [];

  // Variables
  rows1: any[] = [];

  dataSource = new MatTableDataSource();
  displayedColumns = ['Folio Encuesta', 'Fecha Entrada', 'Fecha Salida', 'Placa', 'Servicio', 'Asesor', 'Cliente', 'Calificacion'];
ubi:string;
  expanded: any = {};
  timeout: any;

  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'mytable5',
  };

  cols = [{name: 'Id'}, {name: 'Tipo'}, {name: 'fechaent'}];


  constructor(
    private afs: AngularFirestore,
    private exportAsService: ExportAsService,
    private controlService: EncuestaService,
    private _dataService: DatatableService,
    public authService: AuthService,
    private lvlaccess: LevelaccessService
  ) {
  }

 ngOnInit() {
  this.authService.getAuth().subscribe( user => {
    if (user) {
      this.lvlaccess.getUserData(user.email).subscribe( (info: RegistroInterface) => {
////console.log('usuario desde lvl:', info);
            if(info.ubicacion == 'Centenario'){
              this.ubi = 'Centenario';
              this.listado = this.controlService.getAllEncuestaexC();
              return this._dataService.getDocsC().subscribe(res => this.dataSource.data = res );
            }
            else if (info.ubicacion === 'Viga') {
              this.ubi = 'Viga';
              this.listado = this.controlService.getAllEncuestaex();
              return this._dataService.getDocsV().subscribe(res => this.dataSource.data = res );
          } else {
           // //console.log('Error de sistema: Usuario sin Permisos')
          }
      });
    }
  });
  }

 
  getData1() {

if(this.ubi == 'Centenario'){
  this.afs.collection('typeC').valueChanges().subscribe((encuesta) => {
    this.rows1 = encuesta;
  });
  this.listado = this.rows1;
  this.list = this.rows1;
  this.list2 = this.rows1;
  //console.log('cente')
}
else if(this.ubi == 'Viga'){
  this.afs.collection('type').valueChanges().subscribe((encuesta) => {
    this.rows1 = encuesta;
  });
  this.listado = this.rows1;
  this.list = this.rows1;
  this.list2 = this.rows1;
  //console.log('viga')

}
    
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      ////console.log('paged!', event);
    }, 100);
  }

  onDetailToggle(event) {
    ////console.log('Detail Toggled', event);
  }

  exportAs(type) {
    this.config.type = type;
    this.exportAsService.save(this.config, 'myFile');
  }

  myFunction() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue, input2, filter2;
    input = document.getElementById('inputfe');
    filter = input.value;
    input2 = document.getElementById('inputfs');
    filter2 = input2.value;
    table = document.getElementById('mytable5');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[15];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue >= filter && txtValue <= filter2 ) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
  myFunction2(event:any) {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('PLACAS');
    filter = input.value;
    
    table = document.getElementById('mytable5');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1 ) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
