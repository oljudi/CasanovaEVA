import { Component, OnInit } from '@angular/core';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboardcallcenter',
  templateUrl: './dashboardcallcenter.component.html',
  styleUrls: ['./dashboardcallcenter.component.css']
})
export class DashboardcallcenterComponent implements OnInit {

  // Iconos
  faHeadset = faHeadset;

  constructor() { }

  ngOnInit() {
  }

}
