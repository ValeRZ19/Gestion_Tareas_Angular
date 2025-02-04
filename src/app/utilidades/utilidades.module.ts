import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    AcercaDeComponent,
    Error404Component,
    NavBarComponent, 
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AcercaDeComponent,
    Error404Component,
    NavBarComponent,
    InicioComponent
  ]
})
export class UtilidadesModule { }
