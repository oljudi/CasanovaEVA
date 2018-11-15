import { Component, OnInit } from '@angular/core';
import { faCarCrash, faToolbox, faNewspaper, faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  faCarCrash = faCarCrash;
  faToolbox = faToolbox;
  faNewspaper = faNewspaper;
  faExclamation = faExclamation;
}
