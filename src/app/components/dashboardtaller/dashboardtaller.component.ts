import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faCarCrash, faSearch, faStickyNote, faPrint } from '@fortawesome/free-solid-svg-icons';

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

  // Variables
  rows1: any[] = [];
  expanded: any = {};
  timeout: any;


  @ViewChild('myTable') table: any;

  constructor() { }

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

}
