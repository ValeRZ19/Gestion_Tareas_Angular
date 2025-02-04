import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas/tarea.interface';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-tareas-pendientes',
  standalone: false,
  
  templateUrl: './tareas-pendientes.component.html',
  styleUrl: './tareas-pendientes.component.css'
})
export class TareasPendientesComponent {
  public tareasPendientes:Tarea[]=[];
  
    constructor(private tareaService:TareasService){}
  
    ngOnInit(): void {
      this.tareaService.obtenerTareas()
        .subscribe((data)=>
          this.tareasPendientes=data.filter(d=> !d.completed))
    }
}
