import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

import { faCarCrash, faSearch, faStickyNote, faPrint, faCar } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from 'angularfire2/firestore';
import { EncuestaexInterface } from 'src/app/Models/Encuestaex';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-dashboardtaller',
  templateUrl: './dashboardtaller.component.html',
  styleUrls: ['./dashboardtaller.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardtallerComponent implements OnInit {

  // Iconos

  faCarCrash = faCarCrash;
  faSearch = faSearch;
  faStickyNote = faStickyNote;
  faPrint = faPrint;
  faCar = faCar;
  fechaent:string;
  fechasal:string;
  listado:any;
  // Variables
  rows1: any[] = [];
  expanded: any = {};
  timeout: any;
  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'mytable5',
  };
  cols = [{name:'Id'},{name:'Tipo'},{name:'fechaent'}];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  temp=[];


  constructor(
    private afs: AngularFirestore,
    private exportAsService: ExportAsService,
    private controlService: EncuestaService
  ) { }

  ngOnInit() { 
    this.getData1();
    this.listado = this.controlService.getAllEncuestaex();
  }
  getData1() {
    this.afs.collection('type').valueChanges().subscribe((encuesta) => {
      this.rows1 = encuesta;
    });
    this.listado = this.rows1;
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
    toggleExpandRow(rows1) {
    console.log('Toggled Expand Row!', rows1);
    this.table.rowDetail.toggleExpandRow(rows1);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
  exportAs(type) {
    this.config.type = type;
    this.exportAsService.save(this.config, 'myFile');
    // this.exportAsService.get(this.config).subscribe(content => {
    //   console.log(content);
    // });
  }
  /*updateFilter(event) {
    const val = event.target.value.toLowerCase();
    var returnData: any;
    // filter our data
    const temp = this.temp.filter(function (d) {

      if (d.id.toLowerCase().indexOf(val) !== -1 || !val) {
        returnData = d.user_name.toLowerCase().indexOf(val) !== -1 || !val;
      } else if (d.tipo.toLowerCase().indexOf(val) !== -1 || !val) {
        returnData = d.notes_title.toLowerCase().indexOf(val) !== -1 || !val;

      }
      console.log(returnData);
      return returnData;
    });
  }*/
  onBuscar({value}: {value: EncuestaexInterface}){

    
    /*console.log(this.fechaent);
    function filterit(query){
      return this.listado.filter(function(el){
        return el.indexOf(query)
      })
    }
    console.log(filterit(this.fechaent));*/
    
    //.ref.orderBy(this.fechaent).startAt(this.fechasal).get().then(  );
  }
  myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue, input2, filter2;
    input = document.getElementById("inputfe");
    filter = input.value;
    input2 = document.getElementById("inputfs");
    filter2 = input2.value;
    table = document.getElementById("mytable5");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[15];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1 || txtValue.indexOf(filter2) > -1 ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }

}
