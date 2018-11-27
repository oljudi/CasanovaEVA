import { Component, OnInit } from '@angular/core';
import { faFemale, faChartLine, faSignOutAlt, faSignInAlt, faHome, faVoteYea, faArchive, faCarCrash, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;

  constructor(
    public AuthService: AuthService
  ) { }

  ngOnInit() {
    this.AuthService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin=true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      } else{
        this.isLogin = false;
      }
    });
  }

  onClickLogOut(){
    this.AuthService.logout();
  }

  faFemale = faFemale;
  faChartLine = faChartLine;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
  faHome = faHome;
  faVoteYea = faVoteYea;
  faArchive = faArchive;
  faCarCrash = faCarCrash;
  faPeopleCarry = faPeopleCarry;
}
