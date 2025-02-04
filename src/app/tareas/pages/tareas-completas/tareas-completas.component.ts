import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interfaces/tareas/tarea.interface';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'tareas-completas',
  standalone: false,
  
  templateUrl: './tareas-completas.component.html',
  styleUrl: './tareas-completas.component.css'
})
export class TareasCompletasComponent implements OnInit{
  public tareaCompletada:Tarea[]=[];

  constructor(private tareaService:TareasService){}

  ngOnInit(): void {
    this.tareaService.obtenerTareas()
      .subscribe((data)=>
        this.tareaCompletada=data.filter(d=> d.completed))
  }
}
