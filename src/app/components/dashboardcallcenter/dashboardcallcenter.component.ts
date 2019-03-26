import { Component, OnInit } from '@angular/core';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-dashboardcallcenter',
  templateUrl: './dashboardcallcenter.component.html',
  styleUrls: ['./dashboardcallcenter.component.css']
})
export class DashboardcallcenterComponent implements OnInit {
  rows: any[] = [];
  // Iconos
  faHeadset = faHeadset;

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.getData1();
  }
  getData1() {
    this.afs.collection('type').valueChanges().subscribe((encuesta) => {
      this.rows = encuesta;
    });
  }
}
