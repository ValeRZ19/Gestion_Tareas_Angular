import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './utilidades/pages/error-404/error-404.component';
import { AcercaDeComponent } from './utilidades/pages/acerca-de/acerca-de.component';
import { DetallesComponent } from './tareas/pages/detalles/detalles.component';
import { TareasPendientesComponent } from './tareas/pages/tareas-pendientes/tareas-pendientes.component';
import { TareasCompletasComponent } from './tareas/pages/tareas-completas/tareas-completas.component';
import { InicioComponent } from './utilidades/pages/inicio/inicio.component';

const routes: Routes = [

  {
    path:'',
    component:InicioComponent
  },
  {
    path:'completa',
    component:TareasCompletasComponent
  },
  {
    path: 'pendiente',
    component: TareasPendientesComponent     
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent     
  },
  {
    path: 'acerca',
    component: AcercaDeComponent     
  },
  {
    path:'**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
