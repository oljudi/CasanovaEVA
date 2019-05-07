import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { faFemale, faChartLine, faSignOutAlt, faSignInAlt, faHome, faVoteYea, faArchive, faCarCrash, faPeopleCarry, faUserCog, faHeadset } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../services/auth.service';
import { RegistroInterface } from 'src/app/Models/registro';
import { AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faFemale = faFemale;
  faChartLine = faChartLine;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
  faHome = faHome;
  faVoteYea = faVoteYea;
  faArchive = faArchive;
  faCarCrash = faCarCrash;
  faPeopleCarry = faPeopleCarry;
  faUserCog = faUserCog;
  faHeadset = faHeadset;

  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;

  public admin = false;
  public taller = false;
  public callcenter = false;
  public suadmin = false;


  // rol: string;
  userName: string;

  // roles de usuario

  user: RegistroInterface = {
    id: '',
    nombre: '',
    correo: '',
    admin: false,
    suadmin: false,
    tipo: ''
  };
  nomUsuario: any;
  constructor(
    private afs: AngularFirestore,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( user => {
      if (user) {
        this.isLogin = true;
        this.emailUsuario = user.email;
        this.nombreusuaro(this.emailUsuario);
      } else {
        this.isLogin = false;
      }
    });
  }

  nombreusuaro(x: string) {
    this.afs.collection('Registro').doc(x).valueChanges().subscribe(res => {
      if( res.suadmin ){ 
        this.suadmin = true;
      }
      this.user.admin = res.admin; 
      this.user.nombre = res.nombre;
      this.user.tipo = res.tipo;
      this.privilage( this.user.tipo );
    });
    // this.AuthService.getUser(this.emailUsuario);
  }

  privilage( rol: string ){
    console.log('Entro a rol: ', rol);
    if( rol === 'Administrador' ){
      this.admin = true;
    } else if ( rol === 'Taller'){
      this.taller = true;
    } else if ( rol === 'CallCenter'){
      this.callcenter = true;
    }
  }  

  // arrass(x: RegistroInterface): void {
  //   this.userName = x.nombre;
  //   this.rol = x.tipo;
  // }

  onClickLogOut() {
    this.authService.logout();
  }

}
