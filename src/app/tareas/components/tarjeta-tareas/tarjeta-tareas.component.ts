import { Component, Input } from '@angular/core';
import { Tarea } from '../../interfaces/tareas/tarea.interface';

@Component({
  selector: 'tarjeta-tareas',
  standalone: false,
  
  templateUrl: './tarjeta-tareas.component.html',
  styleUrl: './tarjeta-tareas.component.css'
})
export class TarjetaTareasComponent {
  @Input()
  public tarea!:Tarea;
}
