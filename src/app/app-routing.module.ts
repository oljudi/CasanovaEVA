import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { ExpressComponent } from './components/express/express.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReparacionComponent } from './components/reparacion/reparacion.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { TramiteComponent } from './components/tramite/tramite.component';
import { TypeComponent } from './components/type/type.component';
import { Page404Component } from './components/page404/page404.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NavbardownComponent } from './components/navbardown/navbardown.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'express/:id', component: ExpressComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'reparacion', component: ReparacionComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'tramite', component: TramiteComponent },
  { path: 'type', component: TypeComponent },
  { path: 'encuesta', component: EncuestaComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'navbardown', component: NavbardownComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
