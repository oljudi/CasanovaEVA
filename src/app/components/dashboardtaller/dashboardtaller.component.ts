import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

import { faCarCrash, faSearch, faStickyNote, faPrint, faCar } from '@fortawesome/free-solid-svg-icons';

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


  // Variables
  rows1: any[] = [];
  expanded: any = {};
  timeout: any;
  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'mytable',
  };


  @ViewChild('myTable') table: any;

  constructor(
    private exportAsService: ExportAsService
  ) { }

  ngOnInit() {
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


}
