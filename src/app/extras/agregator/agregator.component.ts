import { Component, OnInit } from '@angular/core';
import { ApoloService } from 'src/app/services/apolo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregator',
  templateUrl: './agregator.component.html',
  styleUrls: ['./agregator.component.css']
})
export class AgregatorComponent implements OnInit {

  public status = 1;

  public nuevoAF = new FormGroup ({
    id_AF: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required)
  });

  public mecanico = new FormGroup ({
    id_Mecanico: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required)
  });

  public cliente = new FormGroup ({
    id_Cliente: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required)
  })

  constructor(
    private _apolo: ApoloService
  ) { 
    this.iniciarAF();
    this.inciarMecanico();
    this.iniciarCliente();
  }

  ngOnInit() {
  }

  iniciarAF() {
    this.nuevoAF.setValue({
      id_AF: '',
      nombre: '',
      ubicacion: ''
    });
  }

  public nuevoAdminFlota(form) {
    if(this.status === 1){
      let data = {
        id_AF: form.id_AF,
        nombre: form.nombre,
        ubicacion: form.ubicacion
      }
      this._apolo.addAdministrador( data ).then(() => {
        console.log('Administrador Flota creado con exito!');
        this.iniciarAF();
      }, (error) => {
        console.log('ERROR: ', error);
      });
    } else {
      console.log('UPDATE status')
    }
  }

  inciarMecanico(){
    this.mecanico.setValue({
      id_Mecanico: '',
      nombre: '',
      ubicacion: ''
    });
  }

  public nuevoMecanico(form) {
    if(this.status === 1){
      let data = {
        id_Mecanico: form.id_Mecanico,
        nombre: form.nombre,
        ubicacion: form.ubicacion
      }
      this._apolo.addMecanico( data ).then(() => {
        console.log('Mecanico creado con exito!');
        this.inciarMecanico();
      }, (error) => {
        console.log('ERROR: ', error);
      });
    } else {
      console.log('UPDATE status');
    }
  }

  iniciarCliente(){
    this.cliente.setValue({
      id_Cliente: '',
      nombre: ''
    });
  }

  public nuevoCliente(form) {
    if(this.status === 1) {
      let data = {
        id_Cliente: form.id_Cliente,
        nombre: form.nombre
      }
      this._apolo.addCliente( data ).then(() => {
        console.log('Cliente creado con exito!');
        this.iniciarCliente();
      }, (error) => {
        console.log('ERROR: ', error);
      });
    } else {
      console.log('UPDATE status');
    }
  }
}
