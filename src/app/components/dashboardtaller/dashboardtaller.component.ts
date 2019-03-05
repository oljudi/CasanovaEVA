import { Component, OnInit } from '@angular/core';
import { faCarCrash, faSearch, faNotesMedical, faStickyNote, faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboardtaller',
  templateUrl: './dashboardtaller.component.html',
  styleUrls: ['./dashboardtaller.component.css']
})
export class DashboardtallerComponent implements OnInit {

  // Iconos

  faCarCrash = faCarCrash;
  faSearch = faSearch;
  faStickyNote = faStickyNote;
  faPrint = faPrint;

  // Variables

  constructor() { }

  ngOnInit() {
  }

}
