import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegistroInterface } from 'src/app/Models/registro';
import { FirebaseApp } from 'angularfire2';
import { auth } from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }
    public email:string;
    public pass: string;
    public nombre: string;
    public admin: boolean;
    public suadmin: boolean;

  ngOnInit() {
  }


  addnewuser(){
    this.authservice.registeruser(this.email,this.pass)
    .then((res)=>{
      this.router.navigate(['/admin'])
    }).catch(err=> console.log('err',err.message));
  }
  guardarregistro({value}: {value: RegistroInterface}){
    let userID  = auth().currentUser!.uid;

    this.suadmin = false;
    this.admin = false;
    value.id = this.email;
    value.correo = this.email;
    value.nombre = this.nombre;
    value.admin = this.admin;
    value.suadmin = this.suadmin;
    this.authservice.addregistro(value);
  }
}
