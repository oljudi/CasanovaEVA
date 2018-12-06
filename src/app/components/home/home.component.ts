import { Component, OnInit } from '@angular/core';
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

  constructor(
    public encuestase:EncuestaService,
    public router: Router
  ) {}
  
onEncuesta({value}: {value: EncuestaexInterface}){
      this.router.navigate(['/admin']);
    
    value.id=this.encuesta.id;
   
    this.encuestase.addEncuestaex(value);
  }

  ngOnInit() {
  }

  encuesta:EncuestaexInterface={id: ''};

  faVoteYea = faVoteYea;
}

