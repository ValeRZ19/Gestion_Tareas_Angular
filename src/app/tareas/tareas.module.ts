import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { TareasCompletasComponent } from './pages/tareas-completas/tareas-completas.component';
import { TareasPendientesComponent } from './pages/tareas-pendientes/tareas-pendientes.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { TarjetaTareasComponent } from './components/tarjeta-tareas/tarjeta-tareas.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';




@NgModule({
  declarations: [
    DetallesComponent,
    TareasCompletasComponent,
    TareasPendientesComponent,
    TarjetaTareasComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule,
    RouterModule
  ],
  exports: [ModalComponent]
})
export class TareasModule { }
