import { Component, OnInit } from '@angular/core';
import { ApoloService } from 'src/app/services/apolo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-agregator',
  templateUrl: './agregator.component.html',
  styleUrls: ['./agregator.component.css']
})
export class AgregatorComponent implements OnInit {

  public status = 1;

  public nuevoaf = new FormGroup ({
    id_af: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required)
  });

  public mecanico = new FormGroup ({
    id_mecanico: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required)
  });

  public asesor = new FormGroup ({
    id_asesor: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required)
  });

  public cliente = new FormGroup ({
    id_cliente: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required)
  })

  rows1: any;
  rows2: any;
  rows3: any;
  rows4: any;

  constructor(
    private _apolo: ApoloService,
    private afs: AngularFirestore
  ) { 
    this.iniciaraf();
    this.inciarmecanico();
    this.iniciarcliente();
    this.inciarasesor();
  }

  ngOnInit() {
    
    this.getData1();
    this.getData2();
    this.getData3();
    this.getData4();
  }

  iniciaraf() {
    this.nuevoaf.setValue({
      id_af: '',
      nombre: '',
      ubicacion: ''
    });
  }

  public nuevoAdminFlota(form) {
    if(this.status === 1){
      let data = {
        id: form.id_af,
        id_af: form.id_af,
        nombre: form.nombre,
        ubicacion: form.ubicacion
      }
      this._apolo.addadministrador( data ).then(() => {
        console.log('Administrador Flota creado con éxito!');
        this.iniciaraf();
      }, (error) => {
        console.log('ERROR: ', error);
      });
    } else {
      console.log('UPDATE status')
    }
  }

  inciarmecanico(){
    this.mecanico.setValue({
      id_mecanico: '',
      nombre: '',
      ubicacion: ''
    });
  }

  public nuevomecanico(form) {
    if(this.status === 1){
      let data = {
        id: form.id_mecanico,
        id_mecanico: form.id_mecanico,
        nombre: form.nombre,
        ubicacion: form.ubicacion
      }
      this._apolo.addmecanico( data ).then(() => {
        console.log('Mecanico creado con éxito!');
        this.inciarmecanico();
      }, (error) => {
        console.log('ERROR: ', error);
      });
    } else {
      console.log('UPDATE status');
    }
  }

  inciarasesor(){
    this.asesor.setValue({
      id_asesor: '',
      nombre: '',
      ubicacion: ''
    });
  }

  public nuevoasesor(form) {
    if(this.status === 1){
      let data = {
        id: form.id_asesor,
        id_asesor: form.id_asesor,
        nombre: form.nombre,
        ubicacion: form.ubicacion
      }
      this._apolo.addasesor( data ).then(() => {
        console.log('Asesor creado con éxito!');
        this.inciarasesor();
      }, (error) => {
        console.log('ERROR: ', error);
      });
    } else {
      console.log('UPDATE status');
    }
  }

  public nuevocliente(form) {
    if(this.status === 1) {
      let data = {
        id: form.id_cliente,
        id_cliente: form.id_cliente,
        nombre: form.nombre
      }
      this._apolo.addcliente( data ).then(() => {
        console.log('Cliente creado con éxito!');
        this.iniciarcliente();
      }, (error) => {
        console.log('ERROR: ', error);
      });
    } else {
      console.log('UPDATE status');
    }
  }

  iniciarcliente(){
    this.cliente.setValue({
      id_cliente: '',
      nombre: ''
    });
  }
eliminarm(x: string){
  this._apolo.deletemecanico(x);
}
eliminaraf(x: string){
  this._apolo.deleteadministrador(x);
}
eliminarc(x: string){
  this._apolo.deletecliente(x);
}
eliminaras(x: string){
  this._apolo.deleteasesor(x);
}

 
  getData1() {
    //get coll
        this.afs.collection('Clientes').valueChanges().subscribe((encuesta) => {
       this.rows1 = encuesta ;
     });
        }
   getData2() {
    //get coll
        this.afs.collection('AdministradoresFlota').valueChanges().subscribe((encuesta) => {
       this.rows2 = encuesta ;
     });
   }
   getData3() {
    //get coll
        this.afs.collection('Mecanicos').valueChanges().subscribe((encuesta) => {
       this.rows3 = encuesta ;
     });
   }
   getData4() {
    //get coll
        this.afs.collection('Asesor').valueChanges().subscribe((encuesta) => {
       this.rows4 = encuesta ;
     });
   }
}
