import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas/tarea.interface';
import { UserResumen } from '../../interfaces/users/user-resumen.interface';
import { TareasService } from '../../services/tareas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles',
  standalone: false,
  
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  public tarea!: Tarea;
  public user!: UserResumen;
  public episodios: string[] = [];

  constructor(
    private tareasService: TareasService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private location:Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.obtenerTarea(id);
    });
  }

  obtenerTarea(id: number): void {
    this.tareasService.obtenerTareaPorId(id).subscribe((tarea) => {
      if (!tarea) {
        this.router.navigateByUrl('/'); //redirige si la tarea no existe
        return;
      }

      this.tarea = tarea;
      this.obtenerUsuario(tarea.userId);
    });
  }

  obtenerUsuario(userId: number): void {
    this.tareasService.obtenerUsers(userId).subscribe((user) => {
      this.user = user;
    });
  }

  public regresar(): void {
    this.location.back()
  } 
}
