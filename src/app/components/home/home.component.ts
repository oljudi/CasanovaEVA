import { Component, OnInit, Input } from '@angular/core';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import {EncuestaexInterface} from '../../Models/Encuestaex';
import {EncuestaService} from '../../services/encuesta.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string;

  idenc: string;
  

  constructor(
    public encuestase:EncuestaService,
    public router: Router,
  ) {
    this.name=this.idenc;
  }
  
onEncuesta({value}: {value: EncuestaexInterface}){
      this.router.navigate(['/express']);
    
    value.id=this.idenc
   
    this.encuestase.addEncuestaex(value);
  }

  ngOnInit() {
  }
  
  encuesta:EncuestaexInterface={id: ''};

  faVoteYea = faVoteYea;
}


