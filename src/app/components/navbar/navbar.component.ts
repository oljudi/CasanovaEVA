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
  user: RegistroInterface = {
    nombre: '',
    correo: '',
    admin: false,
    suadmin: false,
    id: ''
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
        // console.log(this.nomUsuario);
      } else {
        this.isLogin = false;
      }
    });
//    this.nomUsuario =this.nombreusuaro();



  }
  nombreusuaro(x: string) {

    this.afs.collection('Registro').doc(x).valueChanges().pipe(take(1)).subscribe(res => {this.arrass(res); } );
    // this.AuthService.getUser(this.emailUsuario);

  }
  arrass(x: RegistroInterface): string {

     this.nomUsuario = x.nombre;

    console.log(x.nombre);
    console.log(this.nomUsuario);


   return this.nomUsuario;

  }

  onClickLogOut() {
    this.authService.logout();
  }

}
